const asyncHandler = require('express-async-handler')

const Sample = require('../model/sampleModel')

const getSample = asyncHandler(async (req, res) => {
    const samples = await Sample.find({})
    res.json(samples)
})

const postSample = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400).json
        throw new Error('Please add text field')
    }

    const samples = await Sample.create({
        text: req.body.text,
    })
    res.json(samples)
})

const putSample = asyncHandler(async (req, res) => {
    const samples = await Sample.findById(req.params.id);

    if (!samples) {
        res.status(400)
        throw new Error('Id not find')
    }
    const updatedSample = await Sample.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })
    res.json(updatedSample)
})
const deleteSample = asyncHandler(async (req, res) => {
    const samples = await Sample.findById(req.params.id)

    if (!samples) {
        res.status(400)
        throw new Error('Id not find')
    }

    await Sample.findByIdAndDelete(req.params.id)
    res.json({ id: req.params.id })
})
module.exports = {
    getSample, postSample, putSample, deleteSample
}