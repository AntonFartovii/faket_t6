import { faker } from '@faker-js/faker'
import {Router} from 'express'
const router = Router()

let users = []
for (let i = 1; i <= 20; i++ ) {
    const user = createRandomUser( i )
    users.push( user )
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

router.get('/', (req,res,) => {
    res.render('index', {
        users
    })
})

export const homeRoutes = router