"""
Model for product
"""

from sqlalchemy import Column, Integer, String
from sqlalchemy.orm import declarative_base

Base = declarative_base()


class Product(Base):  # type: ignore
    """Model class to product table"""

    __tablename__ = "Product"
    id = Column(Integer, primary_key=True)
    name = Column(String)

    def to_json(self):
        """convert model to json"""

        return {
            "id": self.id,
            "name": self.name,
        }
