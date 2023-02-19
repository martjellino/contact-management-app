const express = require('express')
const connectDb = require('./config/dbCOnnection')
const dotenv = require('dotenv').config()
const port = 3030
const errorHandler = require('./middleware/errorHandler')

const app = express()
connectDb()

app.use(express.json())
app.use("/api/contacts", require("./routes/contact"))
app.use("/api/users", require("./routes/users"))
app.use(errorHandler)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})