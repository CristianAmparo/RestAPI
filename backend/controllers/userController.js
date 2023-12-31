
const jwt = require('jsonwebtoken')//Token
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../model/userModel')



//not suggested/ for view only/need to remove for security
const viewAllUser = asyncHandler(async (req, res) => {
    const users = await User.find({})
    res.json({ users })
})
//Register new user | POST /api/users
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body
    if (!name || !email || !password) {
        res.status(400)
        throw new Error('Please add register text field')
    }
    //Check if user exist
    const userExists = await User.findOne({ email }, null, { maxTimeMS: 20000 });
    if (userExists) {
        res.status(400)
        throw new Error('User Already Exist')
    }
    //Hash password | bcrypt
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    //Create user
    const user = await User.create({
        name,
        email,
        password: hashedPassword
    })
    if (user) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error('Invalid User Data')
    }

})

//Authenticate user | POST /api/login
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    //check user email
    const user = await User.findOne({ email })


    if (user && (await bcrypt.compare(password, user.password))) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })

    } else {
        res.status(400)
        throw new Error('Invalid Username or Password')
    }

})

//Get user data | GET /api/users/me
const getMe = asyncHandler(async (req, res) => {
    const { _id, name, email } = await User.findById(req.user.id)
    res.status(201).json({
        id: _id,
        name,
        email,
    })
})


// Generate Token
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' })
}
module.exports = {
    viewAllUser, registerUser, loginUser, getMe,
}