import pulp

def calculate_optimal_net_flow(nodes, edges):
    """
    Calculates most optimal flow in network using linear optimization
    :param nodes: Contains list of dict contains id and value keys.
                    If value is grater than zero -> it's supplier
                    If value is less than zero -> it's demand
                    If value is zero -> it's intermediary
                  Example: [{'id':1, 'value':2}]
    :param edges: list of dicts containing from and to node id connection, and transportation cost.
                    Example: [{'from':1, 'to':2, 'cost': 3}]
    :return: edges list with flow that goes trough it as edges and overall_cost as optimized value,
             example: ['optimized_value': 12, 'edges':{'from':1, 'to':2, 'amount': 3}]
    """

    # TODO: don't forget to make input validation
    optimization_model = pulp.LpProblem("Net flow optimization problem", pulp.const.LpMinimize)

    from_indexes = [edge['from'] for edge in edges]
    to_indexes = [edge['to'] for edge in edges]

    variables = pulp.LpVariable.dicts("Edges", (from_indexes, to_indexes), lowBound=0, cat=pulp.const.LpInteger)

    optimization_model += pulp.lpSum([variables[edge['from']][edge['to']] * edge['cost'] for edge in edges])




    for node in nodes:
        plus_edges = filter(lambda edge: edge['from'] == node['id'], edges)
        minus_edges = filter(lambda edge: edge['to'] == node['id'], edges)
        variables_list = [variables[edge['from']][edge['to']] for edge in plus_edges] + \
                         [-1 * variables[edge['from']][edge['to']] for edge in minus_edges]

        cost = node['value']
        if cost == 0:
            optimization_model += pulp.lpSum(-1*variable for variable in variables_list) == abs(cost)
        elif cost > 0:
            optimization_model += pulp.lpSum(variables_list) <= abs(cost)
        else:
            optimization_model += pulp.lpSum(-1*variable for variable in variables_list) >= abs(cost)


    optimization_model.solve()

    result_edges = list(map(lambda edge: map_to_result_edge(edge, variables), edges))

    return {'overallCost': pulp.value(optimization_model.objective), 'edges': result_edges}


def map_to_result_edge(edge: dict, variables_dict) -> dict:
    from_id, to_id, _ = edge.values()

    return {'from': from_id, 'to': to_id, 'amount': variables_dict[from_id][to_id].value()}


if __name__ == "__main__":
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


    calculate_optimal_net_flow(nodes, edges)
    print(calculate_optimal_net_flow(nodes, edges))
