

export const calculate  = (data)=>{
    let nodes = data.nodes;
    let edges = data.edges;
    let constraints = []
    for(let node of nodes){
        let  constraint = [node.id,node.value]
        for(let edge of edges){
            if(node.id===edge.from){

                constraint.push({"route":[edge.from,edge.to],"value":edge.cost})
            }
            else if(node.id===edge.to){
                constraint.push({"route":[edge.from,edge.to],"value":-edge.cost})
            }
        }
        constraints.push(constraint)
    }


}