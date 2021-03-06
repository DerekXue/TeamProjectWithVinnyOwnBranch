const express = require('express')
const passport = require('passport')
const authMiddleware = require('../middleware/auth')

const router = express.Router()

router
    // .route('/')
    // Get logged in user’s details
    .get('/', async (req, res) => {
        // console.log(req)
        let event = await global.Event.find({
            eventProposer: req.user._id
        })
            .populate('venueId')
        // console.log(event)
        res.json(event)
    })
    .post('/', async (req, res) => {
        console.log("you comed to backend api")
        console.log(req.body)

        let newEvent = await global.Event.create({
            name: req.body.name,
            noOfTickets: req.body.noOfTickets,
            price: req.body.price,
            dateAndTime: req.body.dateAndTime,
            description: req.body.description,
            eventProposer: req.user._id,
            venueId: req.body.venueId
        })
        console.log("inserted!")
        console.log(newEvent)
        res.json({ test: "j" })
    })


module.exports = router
