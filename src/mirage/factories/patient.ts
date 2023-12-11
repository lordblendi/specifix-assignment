import { Factory } from "miragejs"

import { faker } from "@faker-js/faker"
import { generateAddress } from "../utils/helpers"

export const patientFactory = Factory.extend({
    name() {
        return faker.person.fullName()
    },

    gender() {
        return faker.person.sexType()
    },

    birthDate() {
        return faker.date.birthdate({ min: 16, max: 70 }).toISOString()
    },

    birthLocation() {
        return generateAddress()
    },

    address() {
        return generateAddress()
    },

    phone() {
        return faker.phone.number()
    },

    stlFile(index) {
        return [
            "F040 Radius CL.stl",
            "F055 Radius CL.stl",
            "F062 Radius CL.stl",
        ][index % 3]
    },
})
