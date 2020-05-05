const db = require('../models')
const mongoose = require('mongoose')

exports.showQuizzes = async(req,res,next) =>{
    try {
        const quizzes = await db.Quiz.find({})

        res.json(quizzes).status(200)
        next() 
    } catch (error) {
        next({
            status:400,
            message:error.message
        })
    }
}

exports.createQuiz = async(req,res,next) =>{
    try {
        const {_id : userId} = req.user
        const user = await db.User.findById({_id:userId})


        const {name,no_of_questions,marks,alloted_time} = req.body

        const quiz = new db.Quiz({
            ...req.body,
            author:user._id
        })
        console.log(quiz);
        
        user.quizzesCreated.push(quiz)

        await user.save()
        await quiz.save()

        res.status(201).json({
            ...quiz._doc,
            author:userId
        })

        next()
    } catch (error) {
        next({
            status:400,
            message:error.message
        })
    }
}

exports.showMyQuizzes = async(req,res,next) =>{
    try {
        const {_id : userId} = req.user
        const user = await db.User.findById({_id:userId}).populate('quizzesCreated')

        res.status(200).json(user.quizzesCreated)

        next()
         
    } catch (error) {
        next({
            status:400,
            message:error.message
        })
    }
}

// exports.startQuiz = async(req,res,next) =>{
//     try {
            
//     } catch (error) {
//         next({
//             status:400,
//             message:error.message
//         })
//     }
// }
    
// We will place a setTimeOut in frontEnd when that is over, this API call is placed and answers will be submitted  
// Well I wil think of it afterwards TODO:
exports.endQuiz = async(req,res,next) =>{
    try {
            
    } catch (error) {
        next({
            status:400,
            message:error.message
        })
    }
}

// ==================================================================

exports.showQuestions = async(req,res,next) =>{
    try {
        const {quizID} = req.params
        const quiz = await db.Quiz.findById({_id:mongoose.Types.ObjectId(quizID)}).populate('questions')
        
        res.status(200).json(quiz.questions)
        next()

    } catch (error) {
        next({
            status:400,
            message:error.message
        })
    }
}

exports.createQuestion = async (req,res,next) =>{
    try {
        const {quizID} = req.params
        const quiz = await db.Quiz.findById({_id:mongoose.Types.ObjectId(quizID)})
        // console.log(quiz);
        

        const {question,options,answer} = req.body

        const ques = new db.Question({
            question,
            options:options.map(option =>option),
            answer,
            quiz:quiz._id
        })

        quiz.questions.push(ques._id)

        await quiz.save()
        await ques.save()

        res.status(200).json({
            ...ques._doc,
            quiz:quiz._id
        })

        next()
    } catch (error) {
        next({
            status:400,
            message:error.message
        })
    }
}

exports.updateQuestion = async (req,res,next) =>{
    try {
        const {quizID,id} = req.params
        const quiz = await db.Quiz.findById({_id:quizID})

        const {question,options,answer} = req.body
        const updatedQuestion = {question,options,answer}
        const ques = await db.Question.findByIdAndUpdate({_id:id},updatedQuestion,{new:true})

        if(!ques){
            throw new Error('Something\'s wrong')
        }

        res.json({
            ...ques._doc
        })

        next()

    } catch (error) {
        next({
            status:400,
            message:error.message
        })
    }
}

exports.showQuestion = (req,res,next) =>{
    try {
        

        next()

    } catch (error) {
        next({
            status:400,
            message:error.message
        })
    }
}

exports.answerQuestion = (req,res,next) =>{
    try {
        


        next()
    } catch (error) {
        next({
            status:400,
            message:error.message
        })
    }
}

