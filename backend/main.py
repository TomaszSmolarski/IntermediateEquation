import pulp


class Solver:
    def __init__(self, nodes, edges):
        self.edges = edges
        self.nodes = nodes
        self.solver = pulp.LpProblem("Solver", pulp.const.LpMinimize)
        self.from_nodes = []
        self.to_nodes = []
        self.variables = []
        self.setFrom_To_Nodes()
        self.setVariables()
        self.addObjectiveFunction()
        self.addConstraints()
        self.solveProblem()

    def setFrom_To_Nodes(self):
        for edge in self.edges:
            self.from_nodes.append(int(edge['from']))
            self.to_nodes.append(int(edge['to']))

    def setVariables(self):
        self.variables = pulp.LpVariable.dicts("Edges", (self.from_nodes, self.to_nodes), lowBound=0,
                                               cat=pulp.const.LpInteger)
        print(self.variables)

    def addObjectiveFunction(self):
        self.solver += pulp.lpSum([self.variables[edge['from']][edge['to']] * int(edge['cost']) for edge in self.edges])

    def addConstraints(self):
        for node in self.nodes:
            supplier = filter(lambda edge: int(node['id']) == int(edge['from']), self.edges)
            receiver = filter(lambda edge: int(node['id']) == int(edge['to']), self.edges)
            list_of_variables_for_node = [self.variables[edge['from']][edge['to']] for edge in supplier] + \
                                         [-1 * self.variables[edge['from']][edge['to']] for edge in receiver]

            if int(node['value']) == 0:
                self.solver += pulp.lpSum(variable for variable in list_of_variables_for_node) == abs(
                    int(node['value']))
            elif int(node['value']) > 0:
                self.solver += pulp.lpSum(variable for variable in list_of_variables_for_node) <= abs(
                    int(node['value']))
            else:
                self.solver += pulp.lpSum(-1 * variable for variable in list_of_variables_for_node) >= abs(
                    int(node['value']))

    def solveProblem(self):
        self.solver.solve()

    def returnResults(self):
        results = list(map(lambda edge: map_to_result_edge(edge, self.variables), self.edges))
        return {'allCost': pulp.value(self.solver.objective), 'edges': results}


def map_to_result_edge(edge: dict, variables_dict) -> dict:
    from_id, to_id, cost, min_, max_ = edge.values()
    return {'from': from_id, 'to': to_id, 'amount': variables_dict[from_id][to_id].value()}


if __name__ == "__main__":
    nodes = [{
        "id": 1,
        "value": 250,
        "type": "Supplier"
    }, {
        "id": 2,
        "value": 300,
        "type": "Supplier"
    }, {
        "id": 3,
        "value": -120,
        "type": "Receiver"
    }, {
        "id": 4,
        "value": -250,
        "type": "Receiver"
    }, {
        "id": 5,
        "value": -100,
        "type": "Receiver"
    }, {
        "id": 6,
        "value": 0,
        "type": "Broker"
    }]
    edges = [{
        "from": 1,
        "to": 3,
        "cost": 3,
        "min": 30,
        "max": 50

    }, {
        "from": 1,
        "to": 6,
        "cost": 5,
        "min": 0,
        "max": 150
    }, {
        "from": 2,
        "to": 1,
        "cost": 2,
        "min": 0,
        "max": False
    }, {
        "from": 2,
        "to": 6,
        "cost": 6,
        "min": 0,
        "max": False
    }, {
        "from": 2,
        "to": 5,
        "cost": 2,
        "min": 0,
        "max": False
    }, {
        "from": 6,
        "to": 3,
        "cost": 5,
        "min": 0,
        "max": False
    }, {
        "from": 6,
        "to": 4,
        "cost": 4,
        "min": 0,
        "max": False
    }, {
        "from": 6,
        "to": 5,
        "cost": 1,
        "min": 0,
        "max": False
    }, {
        "from": 3,
        "to": 4,
        "cost": 8,
        "min": 0,
        "max": False
    }, {
        "from": 4,
        "to": 5,
        "cost": 4,
        "min": 0,
        "max": False
    }]
    solver = Solver(nodes, edges)
    print(solver.returnResults())
