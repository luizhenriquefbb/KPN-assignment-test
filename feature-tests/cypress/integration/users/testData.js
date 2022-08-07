
// identifier to diferenciante data created between tests
const testId = (new Date().valueOf()).toString()

/**
 * Gives me a random number between 1 and 4
 * We have 4 available genders in our database seed.
 * We could get these options dynamically
 * @param {number} min
 * @param {number} max
 * @returns number
 */
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

export const createNewUserData = () => {
    return {
        lastname: `lastname-${testId}`,
        firstname: `firstname-${testId}`,
        birth: `birth-${testId}`,
        gender: randomIntFromInterval(1, 4),
        housenumber: `housenumber-${testId}`,
        zipcode: `zipcode-${testId}`,
        streetname: `streetname-${testId}`,
        city: `city-${testId}`,
        mobilenumber: `mobilenumber-${testId}`,
        email: `email-${testId}@gmail.com`,
    }

}
