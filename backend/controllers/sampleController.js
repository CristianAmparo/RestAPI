const asyncHandler = require('express-async-handler')
const Sample = require('../model/sampleModel')
const User = require('../model/userModel')

const getSample = asyncHandler(async (req, res) => {
    const samples = await Sample.find({ user: req.user.id })
    res.json(samples)
})

const postSample = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add text field')
    }

    const samples = await Sample.create({
        text: req.body.text,
        user: req.user.id,
    })
    res.json(samples)
})


const putSample = asyncHandler(async (req, res) => {
    const samples = await Sample.findById(req.params.id)
    const user = await User.findById(req.user.id)
    //check user
    if (!user) {
        res.status(401)
        throw new Error('User not found')
    }
    //Check if the user match the sample user
    if (samples.user.toString() !== user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }
    const sample = await Sample.findById(req.params.id);

    if (!sample) {
        res.status(400)
        throw new Error('Id not find')
    }

    await Sample.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });


    res.json({ id: req.params.id });
});
const deleteSample = asyncHandler(async (req, res) => {
    const samples = await Sample.findById(req.params.id)
    const user = await User.findById(req.user.id)
    //check user
    if (!user) {
        res.status(401)
        throw new Error('User not found')
    }
    //Check if the user match the sample user
    if (samples.user.toString() !== user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }
    const sample = await Sample.findById(req.params.id);

    if (!sample) {
        res.status(400)
        throw new Error('Id not find')
    }

    await Sample.findByIdAndDelete(req.params.id)
    res.json({ id: req.params.id })
})
module.exports = {
    getSample, postSample, putSample, deleteSample
}