from typing import Union
from sqlalchemy.orm import Session
from src.controllers import Controller
from src.models import Gender


class GenderController (Controller):
    """Class with basic operations of Gender"""

    @staticmethod
    def create():
        raise NotImplementedError("Future work")

    @staticmethod
    def remove():
        raise NotImplementedError("Future work")

    @staticmethod
    def update():
        raise NotImplementedError("Future work")

    @staticmethod
    def search(gender_id: Union[int, str]):
        raise NotImplementedError("Future work")

    @staticmethod
    def list():
        """
        List all genders of the database. In a real application we would want some filters
        and limitations
        """
        response = []
        with Session(GenderController.engine) as session:
            genders = session.query(Gender).order_by(Gender.id).all()
            response = [gender.to_json() for gender in genders]

        return response
