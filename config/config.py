_author_ = "Rohit Patil"

import os


class Config(object):
    SQLALCHEMY_DATABASE_URI = 'sqlite:///../' + os.path.join('database/', 'database.db')
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'you-will-never-guess'
