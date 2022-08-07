from typing import Optional, Union

from sqlalchemy.orm import Session
from src.controllers import Controller
from src.controllers.userController import UserController
from src.models import Product, User


class UserProductController (Controller):
    """Class with basic operations of Userproduct"""

    @staticmethod
    def create(user_id: Union[str, int], product_id: Union[str, int]):
        with Session(UserProductController.engine) as session:
            # get person
            user: User = session.query(User).filter_by(id=user_id).first()
            if not user:
                raise NotImplementedError()

            # get product
            product: Product = session.query(Product).filter_by(id=product_id).first()
            if not product:
                raise NotImplementedError()

            # append one to another
            # commit into database
            user.products.append(product)
            session.commit()

            # raise NotImplementedError()

    @staticmethod
    def remove():
        raise NotImplementedError("Future work")

    @staticmethod
    def update():
        raise NotImplementedError("Future work")

    @staticmethod
    def search(user_id: Union[int, str]):
        """Get user bu user_id

        Args:
            user_id (Union[int, str]): user id
        """
        with Session(UserController.engine) as session:
            user: Optional[User] = session.query(User).filter_by(id=user_id).first()
            if user:
                return user.to_json()
            return None

    @staticmethod
    def list():
        raise NotImplementedError("Future work")
