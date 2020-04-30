const mongoose = require('mongoose')

//mongoose debugger
mongoose.set('debug',true)
//to use mongoose in global mode
mongoose.Promise = global.Promise

mongoose.connect(process.env.MONGO_URI,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useFindAndModify:false,
    useUnifiedTopology:true
},()=>{
    console.log('DB connected');
})