from typing import Union
from sqlalchemy.orm import Session
from src.controllers import Controller
from src.models import Product


class ProductController (Controller):
    """Class with basic operations of Product"""

    @staticmethod
    def create(name: str, id: str = None):  # pylint: disable=redefined-builtin
        """
        Create a new product inserting into the database

        Args:
            name (str): Name of the product
            id (str, optional): id. Defaults to None.

        """
        with Session(ProductController.engine) as session:
            product = Product(
                id=id,
                name=name,

            )

            session.add(product)
            session.commit()

            return product.to_json()

    @staticmethod
    def remove():
        raise NotImplementedError("Future work")

    @staticmethod
    def update():
        raise NotImplementedError("Future work")

    @staticmethod
    def search(product_id: Union[str, int]):
        """Get product by product_id

        Args:
            product_id (Union[int, str]): product id
        """

        with Session(ProductController.engine) as session:
            product: Product = session.query(Product).filter_by(id=product_id).first()
            if product:
                return product.to_json()
            return None

    @staticmethod
    def list():
        """
        List all products of the database. In a real application we would want some filters
        and limitations
        """
        response = []
        with Session(ProductController.engine) as session:
            products = session.query(Product).order_by(Product.id).all()
            response = [product.to_json() for product in products]

        return response
