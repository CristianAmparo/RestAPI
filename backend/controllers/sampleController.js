const asyncHandler = require('express-async-handler')

const getSample = asyncHandler(async (req, res) => {
    res.json({
        id: 1,
        name: 'Cristian Amparo',
        age: 21,
        course: 'BSIT',
        year: '4th'
    })
})
const postSample = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400).json
        throw new Error('Please add text field')
    }
    res.json({
        id: 1,
        name: 'Cristian Amparo',
        age: 21,
        course: 'BSIT',
        year: '4th'
    })
})
const putSample = asyncHandler(async (req, res) => {
    res.json({
        id: 1,
        name: 'Cristian Amparo',
        age: 21,
        course: 'BSIT',
        year: '4th'
    })
})
const deleteSample = asyncHandler(async (req, res) => {
    res.json({
        id: req.params.id,
        name: 'Cristian Amparo',
        age: 21,
        course: 'BSIT',
        year: '4th'
    })
})
module.exports = {
    getSample, postSample, putSample, deleteSample
}