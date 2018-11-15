_author_ = "Rohit Patil"

from flask import Flask
from flask_migrate import Migrate
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager

from config.config import Config

app = Flask(__name__, instance_relative_config=True)

app.config.from_object(Config)

db = SQLAlchemy(app)
db.init_app(app)
migrate = Migrate(app, db)

login = LoginManager(app)
login.login_view = 'login'

from app.models import User
from app import routes
