const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const db = require('../models')

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        trim:true,
        required: 'Enter your userName',
    },
    email: {
        type: String,
        unique: true,
        trim:true,
        required: 'Enter your Email',
    },
    password: {
        type: String,
        required: "Enter your password",
        trim: true,
    },
    quizzesCreated:[{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Quiz'
    }],
    quizzesGiven:[{                            // optional will see after
        type:mongoose.Schema.Types.ObjectId, 
        ref: 'Quiz'
    }]
},{ timestamps:true })

// Hash password before save
userSchema.pre('save', async function (next) {
    try {
        const user = this
        if (!user.isModified('password')) {
            return next()
        }
        const hashed = await bcrypt.hash(user.password, 10)
        user.password = hashed

        return next()
    } catch (err) {
        return next({ status: 400, message: err.message })
    }
})

// Generating token when LOGIN n REGISTER
userSchema.methods.generateToken = async function () {
    try {
        const user = this
        const {
            _id,
            userName
        } = user

        let payload = {
            _id,
            userName
        }
        const token = jwt.sign(payload, process.env.SECRET_KEY, {
            algorithm: 'HS512',
            expiresIn: 3600*24 //1 DAY
        })

        return token
    } catch (err) {
        return next(Error('No token generated'))
    }
}

// Used when SIGN IN check credentials
userSchema.statics.findByCredentials = async function ({userName,password},next){
    try{
        const user = await db.User.findOne({userName})        

        if(!user){
            throw new Error('No user exists')
        }

        const isValid = await bcrypt.compare(password,user.password)
        
        if(!isValid){
            throw new Error('Password\'s incorrect')
        }

        return user
    }catch(err){
        return next({ status: 400, message: err.message })
    }
}

module.exports = mongoose.model('User', userSchema)