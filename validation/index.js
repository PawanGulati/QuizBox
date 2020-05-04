const {validationResult} = require('express-validator')

// Finds the validation errors in this request and wraps them in an object with handy functions
exports.runValidation = (req,res,next) =>{
    const errors = validationResult(req)
    
    // {
    //     "errors": [{
    //       "location": "body",
    //       "msg": "Invalid value",
    //       "param": "username"
    //     }]
    // }

    if(!errors.isEmpty()){
        return next({
            status:422,
            // message.errors.array({onlyFirstError:true}).msg,
            message:errors.array()[0].msg  // error in result can be obtained from .array() or .mapped()
        })
    }

    next()
}