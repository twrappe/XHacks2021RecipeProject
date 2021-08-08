from model import *
from flask import jsonify
login = LoginManager()
from sqlalchemy import exc
from flask_cors import CORS
 
@login.user_loader
def load_user(id):
    return UserModel.query.get(int(id))

app = Flask(__name__)
cors = CORS(app, resources={r"/*": {"origins": "*"}})
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///username_pwd.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True
#db = SQLAlchemy(app)
app.secret_key= "asdfghjklwertyuifkyou"
db.init_app(app)
login.init_app(app)
login.login_view = 'login'
 
@app.before_first_request
def create_all():
    db.create_all()

@app.route('/')
def home():
    return '''
    <h2>Hello</h2><a href="/myrecipes">Click here to go to my recipes</a>'''     

@app.route('/myrecipes')
@login_required
def blog():
    return render_template('myrecipes.html')
 
 
@app.route('/login', methods = ['POST'])
def login():
        new_user= json.load(request.data)
        email = new_user.get('email')
        password = new_/user.get('password')
        user = UserModel.query.filter_by(email = email).first()
        if user is not None and user.check_password(password):
            return jsonify(success=True), 200
        else:
            return jsonify(error="Not a valid user"), 401
 
@app.route('/register', methods=['POST'])
def register():
    if request.method == 'POST':
        email = request.form['email']
        username = request.form['username']
        password = request.form['password']
 
        if UserModel.query.filter_by(email=email).first():
            return ('Use Different Email as this email is already registered.')
             
        user = UserModel(email=email, username=username)
        user.set_password(password)
        db.session.add(user)
        db.session.commit()
        return redirect('/login')
 
 
@app.route('/logout')
def logout():
    logout_user()
    return redirect('/myrecipes')

@app.route('/search',methods = ['POST', 'GET'])
def searching():
    if request.method == "GET":
        recipes = RecipeModel.query.all()
        results = []
        for recipe in recipes:
            result = {}
            result["image"] = recipe.image
            result["name"] = recipe.name
            results.append(result)
        return jsonify(results)
@app.route('/add', methods = ['GET', 'POST'])
def add_recipe():
    if request.method == "GET":
        name = "Cookies"
        image = "../img/4_pastry.jpg"
        recipe = RecipeModel(3, 1, 1, name, image)
        try:
            db.session.add(recipe)
            db.session.commit()
        except exc.IntegrityError:
            db.session.rollback()
        return jsonify(success=True)
@app.route('/clear', methods=['GET'])
def clear_db():
    db.create_all()
    return jsonify(success=True)
app.run(debug=True)