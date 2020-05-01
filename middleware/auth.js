const jwt = require('jsonwebtoken')

module.exports = async (req,res,next) =>{
    try {
        if(req.headers['authorization']){
            const token = req.headers['authorization'].split(' ')[1]

            const user = await jwt.verify(token,process.env.SECRET_KEY)
            if(user){
                req.user = user
                next()
            }
        }else{
            throw new Error('Failed TO Authenticate!')
        }    
    } catch (error) {
        next({
            status:401,
            message:'Failed To Authenticate!'
        })
    }
    
}