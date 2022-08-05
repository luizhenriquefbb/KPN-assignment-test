"""
Entry point: This file will be responsible for creating a FLASK app and configure basic routes
"""

# these imports need to be at top because it will load the env files for the other methods
import os

from dotenv import load_dotenv

load_dotenv(dotenv_path=os.path.join(f'{os.getcwd()}', '.env'))

# pylint: disable=wrong-import-position
from flask import Flask, abort, jsonify, request
from flask_cors import CORS  # type: ignore
from sqlalchemy.orm import Session

from src.database import engine
from src.models.product import Product  # type: ignore
# pylint: enable=wrong-import-position

LISTEN_HOST = os.environ.get("KPN_LISTEN_HOST") or "localhost"
LISTEN_PORT = os.environ.get("KPN_LISTEN_PORT") or 5010

APP = Flask(__name__)
CORS(APP)


@APP.route("/api/product/list", methods=["GET"])
def get_products():
    products = Product.query.all()
    return jsonify([product.to_json() for product in products])


@APP.route('/api/product', methods=['POST'])
def create_product():
    if not request.json:
        abort(400)

    with Session(engine) as session:
        product = Product(
            id=request.json.get('id'),
            name=request.json.get('name'),
        )

        session.add(product)
        session.commit()

        return jsonify(product.to_json()), 201


if __name__ == '__main__':
    APP.run(debug=True, host=LISTEN_HOST, port=LISTEN_PORT)
