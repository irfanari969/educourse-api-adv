const { validateRegister } = require('../middleware/validator.js')
const express = require('express')
const router = express.Router()

const {
 registerUser,
 loginUser
} = require('../controllers/user.controller.js')

router.post('/', validateRegister, registerUser)

router.post('/login', loginUser)

module.exports = router