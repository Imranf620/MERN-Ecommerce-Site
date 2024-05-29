const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("./catchAsyncErrors");
const jwt = require("jsonwebtoken")
const User = require("../models/userModel")

exports.isAutheniticatedUser = catchAsyncErrors(async (req,res,next)=>{
    const {token} = req.cookies;
   
    if(!token) {
        return next(new ErrorHandler("Please login to access", 401))
    }

    const decodedData = jwt.verify(token,process.env.JWT_SECRET)

    req.user = await User.findById(decodedData.id)

    next()
})


exports.authorizedRoles = (...roles) =>{
    return (req, res, next) =>{

        if (!req.user || !req.user.role) {
            return next(new ErrorHandler("Please Login to access this route ", 500));
        }


        if(!roles.includes(req.user.role)){
            return next(new ErrorHandler(`Role: ${req.user.role} is not authorized`,403))
        }

        next()
    }
}