const express = require('express')
const dontenv = require('dotenv').config()
const port = process.env.PORT || 5000
const { errorHandler } = require('./middleware/errorMiddleware')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))


app.use('/api/sample', require('./routes/sampleRoutes'))
app.use(errorHandler)


app.listen(port, () => console.log(`server started on port ${port}`))