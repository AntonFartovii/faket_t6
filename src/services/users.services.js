import { faker } from '@faker-js/faker'

export function Users ( region = 'de', count = 20 ) {
    let users = []
    faker.locale = region

    for (let i = 1; i <= count; i++ ) {
        const user = createRandomUser( i )
        users.push( user )
    }

    return users
}

function createRandomUser( i ) {
    return {
        number: i,
        userId: faker.datatype.uuid(),
        username: faker.internet.userName(),
        address: faker.address.city(),
        phone: faker.phone.phoneNumber()
    };
}
