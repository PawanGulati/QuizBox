const mongoose = require('mongoose')

const db = require('../models');

const OptionSchema = new mongoose.Schema({
    option:String,
})

const QuestionSchema = new mongoose.Schema({
    question:{
        type:String,
        trim:true
    },
    options:[String],
    answer:{
        type:String,
    },
    quiz:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Quiz'
    }
},{timestamps:true})

module.exports = mongoose.model('Question',QuestionSchema)