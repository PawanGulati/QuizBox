exports.signUp = (req,res,next)=>{
    res.json({
        "data":"signup"
    })
    next()
}

exports.signIn = (req,res,next)=>{
    res.send('signup api')
    next()
}