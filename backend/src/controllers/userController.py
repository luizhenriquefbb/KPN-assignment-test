from typing import Union
from sqlalchemy.orm import Session
from src.controllers import Controller
from src.models import Gender, User


class UserController (Controller):
    """Class with basic operations of User"""

    @staticmethod
    def create(lastname: str,
               firstname: str,
               birth: str,
               gender: str,
               housenumber: str,
               zipcode: str,
               streetname: str,
               city: str,
               mobilenumber: str,
               email: str,
               id: str = None):  # pylint: disable=redefined-builtin
        """Create a new user inserting into the database

        Args:
            lastname (str): _description_
            firstname (str): _description_
            birth (str): _description_
            gender (str): _description_
            housenumber (str): _description_
            zipcode (str): _description_
            streetname (str): _description_
            city (str): _description_
            mobilenumber (str): _description_
            email (str): _description_
            id (str, optional): _description_. Defaults to None.

        """
        with Session(UserController.engine) as session:
            user = User(
                id=id,
                lastname=lastname,
                firstname=firstname,
                birth=birth,
                gender=gender,
                housenumber=housenumber,
                zipcode=zipcode,
                streetname=streetname,
                city=city,
                mobilenumber=mobilenumber,
                email=email,
            )

            session.add(user)
            session.commit()

            return user.to_json()

    @staticmethod
    def remove():
        raise NotImplementedError("Future work")

    @staticmethod
    def update():
        raise NotImplementedError("Future work")

    @staticmethod
    def search(user_id: Union[int, str]):
        """Get user by user_id

        Args:
            user_id (Union[int, str]): user id
        """

        with Session(UserController.engine) as session:
            (user, gender) = session.query(User, Gender).filter_by(id=user_id).join(Gender).first()
            if user:
                user = user.to_json()
            if gender:
                user['gender'] = gender.to_json()
                return user

            return None

    @staticmethod
    def list():
        """
        List all users of the database. In a real application we would want some filters
        and limitations
        """
        response = []
        with Session(UserController.engine) as session:
            users = session.query(User).order_by(User.id).all()
            response = [user.to_json() for user in users]

        return response
