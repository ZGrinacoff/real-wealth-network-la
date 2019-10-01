from flask import (
    Flask,
    render_template,
    jsonify,
    request)
from gathering import realwealthdict
app = Flask(__name__)

@app.route("/data")
def gimme():

    return jsonify(realwealthdict)

@app.route("/")
def home():
    return "Welcome!"


if __name__ == "__main__":
    app.run()

