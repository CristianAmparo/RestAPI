const express = require('express')
const router = express.Router()
const { viewAllUser, registerUser, loginUser, getMe } = require('../controllers/userController')
const { protect } = require('../middleware/authMiddleware')

router.get('/', viewAllUser) //not suggested/ for view only/need to remove for security
router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/me', protect, getMe)

module.exports = router