_author_ = "Rohit Patil"

from flask import Flask, render_template, redirect, url_for, request
from models.User import User
from operations.LoginValidator import LoginValidator
from config.config import Config
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

app = Flask(__name__)

app.config.from_object(Config)
db = SQLAlchemy(app)
migrate = Migrate(app, db)


# Route for handling the welcome page logic
@app.route('/')
def welcome():
    return render_template('welcome.html')


# Route for handling the login page logic
@app.route('/login', methods=['GET', 'POST'])
def login():
    error = None
    if request.method == 'POST':
        user = User(request.form['username'], request.form['password'])
        validator = LoginValidator(user)
        validator.validate()
        if request.form['username'] != 'admin' or request.form['password'] != 'admin':
            error = 'Invalid Credentials. Please try again.'
        else:
            return redirect(url_for('welcome'))
    return render_template('login.html', error=error)


if __name__ == '__main__':
    app.run(debug=True)
