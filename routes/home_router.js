const express = require('express')
const router = express.Router()
const Quote = require('../models/quote')
const User = require('../models/user')


router.get('/', (req, res) => {
  Quote.find({'timeEvent': 'morning'})
  .then(quote => {
    quote = quote[0]
    res.render('home', { quote })
  })
  .catch(err => console.log(err))
})

router.get('/profile', (req, res) => {
  const user = req.user
  const quote = Quote.find()
  console.log(user)
  res.render('users/profile', {user, quote})
})

module.exports = router
