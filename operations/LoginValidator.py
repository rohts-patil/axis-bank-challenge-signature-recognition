_author_ = "Rohit Patil"

from flask_sqlalchemy import SQLAlchemy


class LoginValidator:

    def __init__(self, user):
        self.user = user

    def validate(self):
        return True
