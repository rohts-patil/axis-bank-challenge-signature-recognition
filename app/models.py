_author_ = 'Rohit Patil'

from app import db


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(64), index=True, unique=True)
    email = db.Column(db.String(120), index=True, unique=True)
    password_hash = db.Column(db.String(128))
    role = db.Column(db.String(120), index=True, unique=True)

    def __init__(self, username='', email='', password_hash='', role=''):
        self.username = username
        self.email = email
        self.password_hash = password_hash
        self.role = role

    def __repr__(self):
        return '[User:- {}]'.format(self.username)
