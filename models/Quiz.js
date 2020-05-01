const mongoose = require('mongoose')

const db = require('../models');

const QuizSchema = new mongoose.Schema({
    no_of_questions:{
        type:Number,
        required:true
    },
    questions:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Question'
    }],
    name:{
        type:String,
        trim:true,
        required:true,
    },
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    alloted_time:{
        type:Number,
        required:true
    }
},{timestamps:true})

module.exports = mongoose.model('Quiz',QuizSchema)