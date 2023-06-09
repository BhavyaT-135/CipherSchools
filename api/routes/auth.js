const express = require('express')
const router = express.Router()

const { login, register, updateUser } = require('../controllers/auth')

router.post('/register', register)
router.post('/login', login)
router.patch('/update/:id', updateUser)

module.exports = router;