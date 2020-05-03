const mongoose = require('mongoose')

const db = require('../models')

exports.signUp = async(req,res,next)=>{
    try {
        const user = await new db.User(req.body)
        
        const {
            _id,
            userName
        } = user

        const token = await user.generateToken()

        await user.save()

        res.json({
            _id,
            userName,
            token
        })
        
        next()    
    } catch (error) {
        if(error.code === 11000) next({status:11000,message:'Email Already Taken!'})
        next({
            status:400,
            message:error.message
        })
    }
}

exports.signIn = async(req,res,next)=>{
    try {
        const user = await db.User.findByCredentials(req.body,next)
        
        if(!user)
            throw new Error('Check your Credentials')
        
        const {userName,_id} = user

        const token = await user.generateToken() 
        
        res.json({
            token,
            _id,
            userName
        })

        next()
    } catch (error) {
        next({
            status:400,
            message:error.message
        })
    }
}