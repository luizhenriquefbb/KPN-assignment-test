"""Common code between controllers"""

from src.database import engine as _engine


class Controller:
    engine = _engine

    @staticmethod
    def create(**kargs):
        raise NotImplementedError('This method must be overwritten')

    @staticmethod
    def remove(**kargs):
        raise NotImplementedError('This method must be overwritten')

    @staticmethod
    def update(**kargs):
        raise NotImplementedError('This method must be overwritten')

    @staticmethod
    def search(**kargs):
        raise NotImplementedError('This method must be overwritten')

    @staticmethod
    def list(**kargs):
        raise NotImplementedError('This method must be overwritten')
