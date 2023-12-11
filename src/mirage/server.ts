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
            server.createList("patient", 12)
        },

        routes() {
            this.namespace = "api"

            this.get("/patients", () => {
                return this.schema.all("patient")
            })
        },
    })

export default makeServer
