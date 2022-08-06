"""Exceptions for use around the app."""

import json
from enum import Enum
from http import HTTPStatus


class ApiException(Exception):
    """Our custom APIException class which derives from the built-in Exception class"""

    def __init__(self, status_code, message: str, **kwargs):
        self.status_code = status_code
        self.message = message
        kwargs["statusCode"] = status_code
        kwargs["body"] = message
        super().__init__(json.dumps(kwargs))


class BadRequestApiException(ApiException):
    """Raised when a bad request is received."""

    def __init__(self, message: str, **kwargs):
        super().__init__(HTTPStatus.BAD_REQUEST, message, **kwargs)


class ForbiddenApiException(ApiException):
    """Raised when the requested resource is not accessible by the logged in
    user."""

    def __init__(self, message: str, **kwargs):
        super().__init__(HTTPStatus.FORBIDDEN, message, **kwargs)


class ErrorType(Enum):
    """An enumeration of HTTP Error types. Note: why can't we use the http status library here?
    We shouldn't have to maintain this enum, there are libraries to do so.
    """
    BAD_REQUEST = "400"
    CONFLICT_ERROR = "409"
    NOT_FOUND = "404"
    INTERNAL_SERVER_ERROR = "500"
