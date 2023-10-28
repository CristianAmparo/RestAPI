const express = require('express')
const dontenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.PORT || 5000
const cors = require('cors');

const app = express();

// Use the cors middleware
app.use(cors());

connectDB()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))


app.use('/api/sample', require('./routes/sampleRoutes'))
app.use('/api/users', require('./routes/userRoutes'))
app.use(errorHandler)


app.listen(port, () => console.log(`server started on port ${port}`))