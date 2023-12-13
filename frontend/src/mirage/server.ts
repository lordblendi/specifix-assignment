import { Model, Server, createServer } from "miragejs"
import { patientFactory } from "./factories/patient"

export const makeServer = (): Server =>
    createServer({
        models: {
            patient: Model,
        },

        factories: {
            patient: patientFactory,
        },

        seeds(server) {
            server.createList("patient", 24)
        },

        routes() {
            //allow asset calls for the stl files
            this.passthrough((request) => request.url.includes("assets"))
            this.namespace = "/api"

            this.get("/patients", () => {
                return this.schema.all("patient")
            })
        },
    })

export default makeServer
