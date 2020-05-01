module.exports = {
    ...require('./auth'),
    ...require('./quiz'),

}

module.exports.notFound = (req,res,next)=>{
    const error = new Error('Page Not Found!')
    error.status = 404

    next(error)
}

module.exports.errors = (err,req,res,next)=>{
    return res.status(err.status || 500).json({
        success: false,
        error: {
            message: err.message || 'Something went wrong.',
        },
    });
}
