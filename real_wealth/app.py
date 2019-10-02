import os

from flask import (
    Flask,
    render_template,
    jsonify,
    request)
from gathering import (realwealthdict, homerentalpriceData, incomeData)
app = Flask(__name__)

@app.route("/data")
def gimme():

    return jsonify(realwealthdict)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/housing_trends")
def housing_trends():
    return jsonify(homerentalpriceData)

@app.route("/income")
def income():
    return jsonify(incomeData)

if __name__ == "__main__":
    app.run(debug=True)

