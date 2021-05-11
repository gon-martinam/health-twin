import sys
from flask import Flask


@app.route("/hello")
def hello(input):    
    return "Hello World from Flask!"

app = Flask(__name__)

if __name__ == "__main__":
    app.run(host='127.0.0.1', port=5001)