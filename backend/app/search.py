import os
from model import *
from flask import jsonify

from sqlalchemy import exc, delete


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
