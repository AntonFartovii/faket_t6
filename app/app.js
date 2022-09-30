window.addEventListener('scroll', () => {
    if (scrollY + innerHeight >= document.body.scrollHeight - 1 ) {
        addUsers ( 10 )
    }
})

function addUsers( count ) {
    const region = document.querySelector('.region:checked').id
    fetch('/', {
        method: 'POST',
        body: JSON.stringify({region, count}),
        headers: {'content-type': 'application/json'}
    })
        .then(response => { return response.json()} )
        .then( async (data) => {
            const regionTitle = document.querySelector('.region-title')
            regionTitle.textContent = data.region
            const i = Number(localStorage.getItem('i'))
            const html = await getUsersListHtml( data.users, i )
            document.getElementById('main').insertAdjacentHTML("beforeend", html)
        });
}

const regions = document.querySelectorAll('.region')
regions.forEach((item, index, array) => {
        item.addEventListener('change', (e) => {
            array.forEach(everyone => everyone.checked = false )
            item.checked = true
            post( item.id )
        })
    })

function post( id ) {

        fetch('/', {
            method: 'POST',
            body: JSON.stringify({region: id}),
            headers: {
                'content-type': 'application/json'
            }
        })
        .then(response => { return response.json()} )
        .then( async (data) => {

            const regionTitle = document.querySelector('.region-title')
            regionTitle.textContent = data.region
            localStorage.setItem('region', data.region)
            const html = await getUsersListHtml( data.users )
            const container = document.getElementById('main').innerHTML = html
    });
}


async function getUsersListHtml( arr, i = 0) {
    let html = ''
    arr.forEach( (user, index) => html += `<tr>
                                            <td>${Number(index) + i + 1}</td>
                                            <td>${user.userId}</td>
                                            <td>${user.username}</td>
                                            <td>${user.address}</td>
                                            <td>${user.phone}</td>
                                        </tr>`)
    return html
}

