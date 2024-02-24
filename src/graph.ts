class Edge {
    source: string
    destination: string
    weight: number

    constructor(source: string, destination: string, weight: number) {
        this.source = source
        this.destination = destination
        this.weight = weight
    }
}

class Vertex {
    value: string
    edges: Edge[]

    constructor(value: string) {
        this.value = value
    }


    public addEdge(edge: Edge) {
        this.edges.push(edge)
    }
}


class Graph {

    public graphMap: Map<string, Vertex>
    public distancesMap: Map<string, number>
    public processingQueue: Vertex[]

    constructor() {
    }

    public addNewVertexToMap(value: string) {
        const newVertex = new Vertex(value)
        this.graphMap.set(value, newVertex)
    }

    public addEdgeToGraph(source: string, destination: string, weight: number) {
        if (!this.graphMap.has(source)) {
            this.addNewVertexToMap(source)
        }
        if (!this.graphMap.has(destination)) {
            this.addNewVertexToMap(destination)
        }
        const sourceVertex = this.graphMap.get(source)
        const destinationVertex = this.graphMap.get(destination)
        const newEdge = new Edge(source, destination, weight)

        sourceVertex.addEdge(newEdge)
    }

    public calculateShortestPath(referenceVertex: string, destinationVertex: string) {
        // Preparing the map of distances
        this.distancesMap.set(referenceVertex, 0)
        this.distancesMap.forEach(((value, key, map) => {
            if (key !== referenceVertex) {
                map.set(key, Infinity)
            }
        }))
        this.processShortestPath(referenceVertex)

        console.log('shortest path: ')
        console.log(this.distancesMap.get(destinationVertex))

    }


    public processShortestPath(referenceVertexID: string) {
        const referenceVertex = this.graphMap.get(referenceVertexID)
        this.processingQueue.push(referenceVertex)

        while (this.processingQueue.length !== 0) {
            const currentVertex = this.processingQueue.shift()
            for (let edge of currentVertex.edges) {
                const computedDistance = this.distancesMap.get(edge.source)
                const currentDistance = this.distancesMap.get(edge.destination)
                if (currentDistance == Infinity) {
                    this.distancesMap.set(edge.destination, computedDistance + edge.weight)
                } else {
                    if (computedDistance + edge.weight < currentDistance) {
                        this.distancesMap.set(edge.destination, computedDistance + edge.weight)
                    }
                }
                const destinationVertex = this.graphMap.get(edge.destination)
                this.processingQueue.push(destinationVertex)
            }
        }
    }
}


