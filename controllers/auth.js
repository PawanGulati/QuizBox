const mongoose = require('mongoose')

const db = require('../models')

exports.signUp = async(req,res,next)=>{
    try {
        // const user = new db.User(req.body)

        res.json({
            "data":"signup"
        })
        next()    
    } catch (error) {
        next(error)
    }
}

exports.signIn = (req,res,next)=>{
    res.json({
        "data":"signin"
    })
    next()
}