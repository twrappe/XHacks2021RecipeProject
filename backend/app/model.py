import json
from flask import Flask,render_template,request,redirect
from flask_sqlalchemy import SQLAlchemy
from flask_login import login_required, current_user, login_user, logout_user, LoginManager, UserMixin
from werkzeug.security import generate_password_hash, check_password_hash

login = LoginManager()
db = SQLAlchemy()

class UserModel(UserMixin, db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(80), unique=True)
    username = db.Column(db.String(100))
    password_hash = db.Column(db.String())

    def set_password(self, password):
        self.password_hash = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password_hash, password)
class RecipeModel(db.Model):
    __tablename__ = 'recipes'

    rid = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    def __init__(self, rid, name):
        self.rid = rid
        self.name = name
class IngredientsModel(db.Model):
    __tablename__ = 'ingredients'
    gid = db.Column(db.Integer, primary_key=True)
