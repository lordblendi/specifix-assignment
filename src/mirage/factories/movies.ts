import { Factory } from "miragejs"

import { faker } from "@faker-js/faker"

export const movieFactory = Factory.extend({
    title(i) {
        return `${faker.lorem.word()} ${i}`
    },

    year() {
        const min = 1950
        const max = 2019

        return Math.floor(Math.random() * (max - min + 1)) + min
    },

    rating: "PG-13",
})
