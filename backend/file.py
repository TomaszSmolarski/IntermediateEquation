from flask import Flask
from flask import jsonify
import connexion
from connexion.resolver import RestyResolver
from flask_cors import CORS


from main import calculate_optimal_net_flow


app = connexion.App(__name__)
CORS(app.app)


@app.route('/')
def hello():
    nodes = [{
        "id": 1,
        "value": 250
    }, {
        "id": 2,
        "value": 300
    }, {
        "id": 3,
        "value": -120
    }, {
        "id": 4,
        "value": -250
    }, {
        "id": 5,
        "value": -100
    }, {
        "id": 6,
        "value": 0
    }
    ]
    edges = [{
        "from": 1,
        "to": 6,
        "cost": 5
    }, {
        "from": 1,
        "to": 3,
        "cost": 3
    }, {
        "from": 2,
        "to": 1,
        "cost": 2
    }, {
        "from": 2,
        "to": 6,
        "cost": 6
    }, {
        "from": 2,
        "to": 5,
        "cost": 2
    }, {
        "from": 3,
        "to": 4,
        "cost": 8
    }, {
        "from": 4,
        "to": 5,
        "cost": 4
    }, {
        "from": 6,
        "to": 3,
        "cost": 5
    }, {
        "from": 6,
        "to": 4,
        "cost": 4
    }, {
        "from": 6,
        "to": 5,
        "cost": 1
    }
    ]
    results = calculate_optimal_net_flow(nodes, edges)

    return jsonify(results)


if __name__ == '__main__':
    app.run(host="0.0.0.0", port=8080)
