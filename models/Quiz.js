const mongoose = require('mongoose')

const db = require('../models');

const QuizSchema = new mongoose.Schema({
    questions:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Question'
    }],
    Name:{
        type:String,
        trim:true
    },
    author:{
        type:String,
        trim:true
    },
    startTime:{
        type: Date
    },
    endTime:{
        type: Date
    }
},{timestamps:true})

module.exports = mongoose.model('Quiz',QuizSchema)