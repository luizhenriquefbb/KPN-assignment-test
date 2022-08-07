"""
Entry point: This file will be responsible for creating a FLASK app and configure basic routes
"""
# pylint: disable=wrong-import-position

# these imports need to be at top because it will load the env files for the other methods
import os

from dotenv import load_dotenv

from src.exceptions import BadRequestApiException
load_dotenv(dotenv_path=os.path.join(f'{os.getcwd()}', '.env'))

from flask import Flask, abort, jsonify, request
from flask_cors import CORS  # type: ignore
from jsonschema import validate
from jsonschema.exceptions import ValidationError

from src.controllers.userController import UserController
from src.controllers.userProductController import UserProductController
from src.controllers.productController import ProductController
from src.controllers.genderController import GenderController


LISTEN_HOST = os.environ.get("KPN_LISTEN_HOST") or "localhost"
LISTEN_PORT = os.environ.get("KPN_LISTEN_PORT") or 5010

APP = Flask(__name__)
CORS(APP)


@APP.route("/api/product/list", methods=["GET"])
def get_products():
    return jsonify(ProductController.list()), 200


@APP.route('/api/product', methods=['POST'])
def create_product():
    # validate if user sent body
    if not request.json:
        abort(400)

    schema = {
        "type": "object",
        "properties": {
            "name": {"type": "string"},
        },
        "required": [
            "name",
        ],
        "additionalProperties": False,
    }

    try:
        validate(instance=request.json, schema=schema)
    except ValidationError as error:
        return error.message, 400

    user_input = {
        "name": request.json.get('name'),
    }

    product = ProductController.create(**user_input)

    return jsonify(product), 201


@APP.route('/api/user', methods=['POST'])
def create_user():
    if not request.json:
        abort(400)

    schema = {
        "type": "object",
        "properties": {
            "lastname": {"type": "string"},
            "firstname": {"type": "string"},
            "birth": {"type": "string", "format": "date"},
            "gender": {"oneOf": [{"type": "string"}, {"type": "number"}]},
            "housenumber": {"type": "string"},
            "zipcode": {"type": "string"},
            "streetname": {"type": "string"},
            "city": {"type": "string"},
            "mobilenumber": {"type": "string"},
            "email": {"type": "string", "format": "email", },
        },
        "required": [
            "lastname",
            "firstname",
            "birth",
            "gender",
            "housenumber",
            "zipcode",
            "streetname",
            "city",
            "mobilenumber",
            "email",
        ],
        "additionalProperties": False,
    }

    try:
        validate(instance=request.json, schema=schema)
    except ValidationError as error:
        return error.message, 400

    user_input = {
        "lastname": request.json.get('lastname'),
        "firstname": request.json.get('firstname'),
        "birth": request.json.get('birth'),
        "gender": request.json.get('gender'),
        "housenumber": request.json.get('housenumber'),
        "zipcode": request.json.get('zipcode'),
        "streetname": request.json.get('streetname'),
        "city": request.json.get('city'),
        "mobilenumber": request.json.get('mobilenumber'),
        "email": request.json.get('email'),
    }

    try:
        product = UserController.create(**user_input)
    except BadRequestApiException as error:
        return error.message, error.status_code

    return jsonify(product), 201


@APP.route("/api/users/list", methods=["GET"])
def get_users():
    return jsonify(UserController.list()), 200


@APP.route("/api/user/<int:user_id>", methods=["GET"])
def get_user(user_id):
    return jsonify(UserController.search(user_id=user_id)), 200


@APP.route("/api/user/<int:user_id>/order-product", methods=["POST"])
def assign_product_to_user(user_id):
    if not request.json:
        abort(400)

    product_id = request.json.get('product_id')

    return jsonify(UserProductController.create(user_id=user_id, product_id=product_id)), 201


@APP.route("/api/genders/", methods=["GET"])
def get_genders():
    return jsonify(GenderController.list()), 200


if __name__ == '__main__':
    APP.run(debug=True, host=LISTEN_HOST, port=LISTEN_PORT)
