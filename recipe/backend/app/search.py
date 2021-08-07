from flask import Flask,render_template,request,redirect


app = Flask(__name__)




@app.route('/search',methods = ['POST', 'GET'])
def searching():
    if request.method == "POST":
        searched_recipe = request.form['searched_recipe']
        
    return render_template('searchbar.html')

app.run(debug=True)