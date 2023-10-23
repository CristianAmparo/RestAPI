const express = require('express')
const router = express.Router()

router.get('/api/sample', (req, res) => {
    res.json({
        name: 'Cristian Amparo',
        age: 21,
        course: 'BSIT',
        year: '4th'
    })
})

module.exports = router