import {faker} from '@faker-js/faker'

const app = document.querySelector('.app')

let html = `<table class="striped">
                <thead>
                    <tr>
                        <th>Number</th>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Phone</th>
                    </tr>
                    <tbody>
                    ${createBody()}
                    </tbody>
                </thead>
            <tbody>`

function createBody() {
    let html = ''
    for (let i = 1; i <= 20; i++ ) {
        const obj = createRandomUser( i )
        html +=  createRow( obj )
    }
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

function createRow( obj ) {
    const html = `<tr>
                    <td>${obj.number}</td>
                    <td>${obj.userId}</td>
                    <td>${obj.username}/td>
                    <td>${obj.address}</td>
                    <td>${obj.phone}</td>
                  </tr>`
    return html
}



app.innerHTML = html
