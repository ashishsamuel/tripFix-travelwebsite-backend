const express = require('express');

// creating router object of express
const router = new express.Router()
const userController = require('../Controllers/userController')

// using router object we set path for the request
router.post('/user/register',userController.register)

// export router
module.exports = router