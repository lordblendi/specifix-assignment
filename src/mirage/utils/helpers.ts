import { faker } from "@faker-js/faker"

export const generateAddress = (): string => {
    const street = faker.location.streetAddress({ useFullAddress: true })
    const zip = faker.location.zipCode()
    const city = faker.location.city()
    const country = faker.location.country()
    return `${street}, ${zip} ${city}, ${country}`
}
