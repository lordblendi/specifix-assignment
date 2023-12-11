import { Model, Server, createServer } from "miragejs"
import { movieFactory } from "./factories/movies"

export const makeServer = (): Server =>
    createServer({
        models: {
            movie: Model,
        },

        factories: {
            movie: movieFactory,
        },

        seeds(server) {
            server.createList("movie", 5)
        },

        routes() {
            this.namespace = "api"

            this.get("/movies", () => {
                return this.schema.all("movie")
            })
        },
    })

export default makeServer
