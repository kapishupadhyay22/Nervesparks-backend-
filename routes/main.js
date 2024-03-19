const express = require('express')
const router = express.Router()

const { loginu, dashboard } = require('../controllers/main')

const authMiddleware = require('../middleware/auth')

router.route('/dashboard').get(authMiddleware, dashboard)
router.route('/userlogin').post(loginu)
//router.route('/dealerlogin').post(logind)

module.exports = router
