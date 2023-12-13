import express from "express"
import cors from "cors"
import { faker, fakerHU } from "@faker-js/faker"

/// HELPERS
interface Patient {
    id: string
    name: string
    gender: string
    birthDate: string
    birthLocation: string
    address: string
    phone: string
    stlFile: string
}

const generateBirthLocation = (): string => {
    const city = faker.location.city()
    const country = faker.location.country()
    return `${city}, ${country}`
}

const generateAddress = (): string => {
    const street = faker.location.streetAddress()
    const zip = faker.location.zipCode("####")
    const city = faker.location.city()
    const country = faker.location.country()
    return `${street}, ${zip} ${city}, ${country}`
}

const generatePatient = (index: number): Patient => ({
    id: `${index}`,
    name: faker.person.fullName(),
    gender: faker.person.sexType(),
    birthDate: faker.date
        .past({ years: 60 })
        .toLocaleDateString("en-GB"),
    birthLocation: generateBirthLocation(),
    address: generateAddress(),
    phone: fakerHU.phone.number(),
    stlFile: ["F040.stl", "F055.stl", "F062.stl", "example.stl"][index % 4],
})

/// SERVER

const app = express()

const corsOptions = {
    origin: "http://localhost:8080",
}

app.use(cors(corsOptions))

app.use(express.json())
const port = process.env.PORT || 5000

app.get("/patients", (_req, res) => {
    const patients: Patient[] = []

    // generate random 24 patients
    for (let index = 0; index < 24; index++) {
        patients.push(generatePatient(index))
    }

    res.send({ patients })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
