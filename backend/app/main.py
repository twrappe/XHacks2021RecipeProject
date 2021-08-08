from model import *
from flask import jsonify
login = LoginManager()

 
 
@login.user_loader
def load_user(id):
    return UserModel.query.get(int(id))

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///username_pwd.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False 
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
    if request.method == 'POST':
        email = request.form['email']
        password=request.form['password']
        user = UserModel.query.filter_by(email = email).first()
        if user is not None and user.check_password(password):
            login_user(user)
            return redirect('/myrecipes')
    else:
        return jsonify(error="bad request"), 400
 
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

