"""
Create and configure connection with the database
"""

import os

from sqlalchemy import create_engine


POSTGRES_USERNAME = os.environ['POSTGRES_USERNAME']
POSTGRES_PASSWORD = os.environ['POSTGRES_PASSWORD']
POSTGRES_HOST = os.environ['POSTGRES_HOST']
POSTGRES_PORT = os.environ['POSTGRES_PORT']

engine = create_engine(
    f'postgresql://{POSTGRES_USERNAME}:{POSTGRES_PASSWORD}@'
    f'{POSTGRES_HOST}/postgres')
