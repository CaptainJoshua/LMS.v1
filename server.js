const express = require("express")
const { connect } = require("mongoose")
    // const errorHandler = require("")
    // const connectDB = require("./config/dbConnection")
const dotenv = require("dotenv").config()

// separate file of DB Connection - will use local storage for now
// connectDB()

const app = express()
app.use(express.json())
app.set('view engine', 'ejs');
app.set('views', 'views');

const port = process.env.PORT || 4000


app.listen(port, () => {
    console.log(`Server is running on localhost:${port}`)
})