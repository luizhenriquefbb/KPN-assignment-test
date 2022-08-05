from src.controllers import Controller
from sqlalchemy.orm import Session

from src.models.product import Product


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
        pass

    @staticmethod
    def update():
        pass

    @staticmethod
    def search():
        pass

    @staticmethod
    def list():
        pass