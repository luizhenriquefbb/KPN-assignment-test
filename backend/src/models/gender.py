"""
Model of gender. I chose going with a model for gender to prevent someone put any string
into the user table. This way, we will have a table of VALID OPTIONS
"""

from sqlalchemy import Column, Integer, String
from sqlalchemy.orm import declarative_base

Base = declarative_base()


class Gender(Base):  # type: ignore
    """Model class to gender table"""

    __tablename__ = "Gender"
    id = Column(Integer, primary_key=True)
    name = Column(String)

    def to_json(self):
        """convert model to json"""
        return {
            "id": self.id,
            "name": self.name,
        }
