"""
Entry point: This file will be responsible for creating a FLASK app and configure basic routes
"""

# these imports need to be at top because it will load the env files for the other methods
import os

from dotenv import load_dotenv

from src.controllers.userController import UserController
load_dotenv(dotenv_path=os.path.join(f'{os.getcwd()}', '.env'))

# pylint: disable=wrong-import-position
from flask import Flask, abort, jsonify, request
from flask_cors import CORS  # type: ignore

from src.controllers.productController import ProductController
# pylint: enable=wrong-import-position

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
    # TODO: validate body
    if not request.json:
        abort(400)

    user_input = {
        "id": request.json.get('id'),
        "name": request.json.get('name'),
    }

    # TODO: Show the user an error in case he send an id that already exists
    product = ProductController.create(**user_input)

    return jsonify(product), 201


@APP.route('/api/user', methods=['POST'])
def create_user():
    # validate if user sent body
    # TODO: validate body
    if not request.json:
        abort(400)

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

    # TODO: Show the user an error in case he send an id that already exists
    product = UserController.create(**user_input)

    return jsonify(product), 201


if __name__ == '__main__':
    APP.run(debug=True, host=LISTEN_HOST, port=LISTEN_PORT)
