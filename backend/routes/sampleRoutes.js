const express = require('express')
const router = express.Router()
const { getSample, postSample, putSample, deleteSample } = require('../controllers/sampleController')
const { protect } = require('../middleware/authMiddleware')

//protect use for authorization
router.get('/', protect, getSample)
router.post('/', protect, postSample)
router.put('/:id', protect, putSample)
router.delete('/:id', protect, deleteSample)

module.exports = router