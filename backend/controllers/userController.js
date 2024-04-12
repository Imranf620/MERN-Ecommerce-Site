const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const User = require("../models/userModel");
const sendToken = require("../utils/jwtToken");

// register user

exports.registerUser = catchAsyncErrors(async (req, res, next) => {
  const { name, email, password } = req.body;

  const user = await User.create({
    name,
    email,
    password,
    avatar: {
      public_id: "This is a sample id",
      url: "profileURL",
    },
  });

  sendToken(user, 201, res);
});

// login user

exports.loginUser = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;
  //  checking if user is giving password and email both

  if (!email || !password) {
    return next(new ErrorHandler("Please provide email and password", 400));
  }
  const user = await User.findOne({ email }).select("password");
  if (!user) {
    return next(new ErrorHandler("Invalid email or Password", 401));
  }

  const isPasswordMatched = user.comparePassword(password);

  if (!user) {
    return next(new ErrorHandler("Invalid email or Password", 401));
  }

  sendToken(user, 200, res);
});



//  Logout User 


exports.logout = catchAsyncErrors(async(req, res, next)=>{

  res.cookie("token",null,{
    expires: new Date(Date.now()),
    httpOnly: true
  })

  res.status(200).json({
    success: true,
    message: "Successfully logged out"
  })

});
