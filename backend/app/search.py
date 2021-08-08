from model import *
from flask import jsonify
from flask_cors import CORS
from sqlalchemy import exc
app = Flask(__name__)
cors = CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///username_pwd.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True
#db = SQLAlchemy(app)
app.secret_key= "asdfghjklwertyuifkyou"
db.init_app(app)
login.init_app(app)
login.login_view = 'login'


@app.route('/search',methods = ['POST', 'GET'])
def searching():
    if request.method == "GET":
        recipes = RecipeModel.query.all()
        result = {}
        for recipe in recipes:
            print(recipe.name)
            print(recipe.rid)
        return jsonify(0)
@app.route('/add', methods = ['GET', 'POST'])
def add_recipe():
    if request.method == "GET":
        name = "Cookie"
        rid = 5
        recipe = RecipeModel(rid, name)
        try:
            db.session.add(recipe)
            db.session.commit()
        except exc.IntegrityError:
            db.session.rollback()
        return jsonify(success=True)
app.run(debug=True)
