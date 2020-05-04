require('dotenv').config()

const express = require('express')
const app = express()

const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')

const control = require('./controllers')
const db = require('./models')
const {auth,quiz} = require('./routes')

// connect DB
require('./db/mongoose')

//cors middleware
app.use(cors())

//middleware
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())

// routes
app.use('/api/auth',auth)
app.use('/api/quiz',quiz)

// for deployment purpose
if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))

    app.get('*',(req,res) =>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    })
}



// error handling
app.use(control.notFound)
app.use(control.errors)

const port = process.env.PORT || 8080

app.listen(port,()=>{
    console.log(`server running @${port}`);
})