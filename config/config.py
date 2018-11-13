_author_ = "Rohit Patil"

import os


class Config(object):
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL') or \
                              'sqlite:///' + os.path.join('database/', 'database.db')
    SQLALCHEMY_TRACK_MODIFICATIONS = False
