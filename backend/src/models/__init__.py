from sqlalchemy import Column, Date, ForeignKey, Integer, String, Table
from sqlalchemy.orm import declarative_base, relationship

Base = declarative_base()


class Gender(Base):  # type: ignore
    """Model class to gender table"""

    __tablename__ = "Gender"
    id = Column(Integer, primary_key=True)
    name = Column(String)
    users = relationship("User")

    def to_json(self):
        """convert model to json"""
        return {
            "id": self.id,
            "name": self.name,
        }


UserProduct = Table(
    "UserProduct",
    Base.metadata,
    Column("id", Integer, primary_key=True),
    Column("user", ForeignKey("User.id")),
    Column("product", ForeignKey("Product.id")),
)


class Product(Base):  # type: ignore
    """Model class to product table"""

    __tablename__ = "Product"
    id = Column(Integer, primary_key=True)
    name = Column(String)
    users = relationship(
        "User", secondary=UserProduct, back_populates="products")

    def to_json(self):
        """convert model to json"""

        return {
            "id": self.id,
            "name": self.name,
        }


class User(Base):  # type: ignore
    """Model class to User table"""

    __tablename__ = "User"
    id = Column(Integer, primary_key=True)
    lastname = Column(String)
    firstname = Column(String(30))
    birth = Column(Date)
    gender = Column(Integer, ForeignKey("Gender.id"))
    housenumber = Column()
    zipcode = Column()
    streetname = Column()
    city = Column()
    mobilenumber = Column()
    email = Column()
    products = relationship(
        "Product", secondary=UserProduct, back_populates="users")

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
