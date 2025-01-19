exports.HandlingNotFound=(err,req,res,next)=>{
    res.status(err.statusCode).json({
        code:err.statusCode,
        error: err.message,
        message:err.stack
    });
}