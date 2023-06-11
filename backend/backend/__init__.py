from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/')
def home():
    return jsonify({"message": "Welcome to the home page!"})

@app.route('/about')
def about():
    return jsonify({"message": "This is the about page!"})

@app.route('/contact')
def contact():
    return jsonify({"message": "This is the contact page!"})
