from flask import Flask
from flask import jsonify
from flask_cors import CORS
from flask import request

from main import Solver

app = Flask(__name__)
CORS(app)


@app.route('/api', methods=['GET', 'POST'])
def hello():
    results = []
    if request.data:
        content = request.get_json()
        solver = Solver(content['nodes'], content['edges'])
        results = solver.returnResults()

    return jsonify(results)


if __name__ == '__main__':
    app.run(host="127.0.0.1", port=8080)
