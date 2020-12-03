from flask import Flask, render_template
import datetime

add = Flask(__name__)


# @add.route('/')
# def index():
#     return render_template("index.html")
@add.route('/')
def hello_world():
    return '您好啊！'

if __name__ == '__main__':
    add.run()
