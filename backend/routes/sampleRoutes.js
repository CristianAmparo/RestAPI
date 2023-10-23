const express = require('express')
const router = express.Router()
const { getSample, postSample, putSample, deleteSample } = require('../controllers/sampleController')

router.get('/', getSample)
router.post('/', postSample)
router.put('/:id', putSample)
router.delete('/:id', deleteSample)

module.exports = router