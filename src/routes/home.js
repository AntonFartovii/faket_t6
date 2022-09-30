import {Router} from 'express'
import {Users} from "../services/users.services.js";

const router = new Router()
//
// router.get('/', async (req, res) => {
//
//     const users = Users ( 'de')
//
//     res.render('index', {
//         users,
//         region: 'de'
//     })
// })

router.get('/', async (req, res) => {

    const region = req.body.region || 'de'
    const users = Users ( region )

    res.render('index', {
        users,
        region
    })
})

router.post('/', async (req, res) => {

    const region = req.body.region || 'de'
    const count = req.body.count || 20
    const users = Users ( region, count)
    res.send({users, region})
    res.render('index', {
        users,
        region
    })
})
export const homeRoutes = router