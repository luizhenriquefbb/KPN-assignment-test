"""Model for User"""

from sqlalchemy import Column, Integer, String, Date
from sqlalchemy.orm import declarative_base, relationship

Base = declarative_base()


class User(Base):  # type: ignore
    """Model class to User table"""

    __tablename__ = "User"
    id = Column(Integer, primary_key=True)
    lastname = Column(String)
    firstname = Column(String(30))
    birth = Column(Date)
    gender = relationship("Gender", back_populates="Gender")
    housenumber = Column()
    zipcode = Column()
    streetname = Column()
    city = Column()
    mobilenumber = Column()
    email = Column()

    def to_json(self):
        """convert model to json"""
        return {
            "id": self.id,
            "lastname": self.lastname,
            "firstname": self.firstname,
            "birth": self.birth,
            "gender": self.gender,
            "housenumber": self.housenumber,
            "zipcode": self.zipcode,
            "streetname": self.streetname,
            "city": self.city,
            "mobilenumber": self.mobilenumber,
            "email": self.email,
        }
