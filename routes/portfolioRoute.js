const express = require('express')
const { sendEmailController } = require('../controllers/PortfolioController')

const router = express.Router()

router.post('/sendEmail',sendEmailController)

module.exports = router