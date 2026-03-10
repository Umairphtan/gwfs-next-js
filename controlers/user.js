const User = require("../modals/user");
const generateToken = require("../utils/token");


// SIGNUP
exports.signup = async (req, res) => {

try {

const { name, email, password } = req.body;

const userExists = await User.findOne({ email });

if(userExists){
return res.status(400).json({
success:false,
message:"User already exists"
});
}

const user = await User.create({
name,
email,
password
});

res.status(201).json({
success:true,
message:"Signup successfully",
user:{
id:user._id,
name:user.name,
email:user.email
},
token:generateToken(user._id)
});

} catch(error){

res.status(500).json({
success:false,
message:"Server error"
});

}

};



// LOGIN
exports.login = async (req, res) => {

try {

const { email, password } = req.body;

const user = await User.findOne({ email });

if(!user){
return res.status(401).json({
success:false,
message:"Invalid credentials"
});
}

const isMatch = await user.matchPassword(password);

if(!isMatch){
return res.status(401).json({
success:false,
message:"Invalid credentials"
});
}

res.json({
success:true,
message:"Login successfully",
user:{
id:user._id,
name:user.name,
email:user.email
},
token:generateToken(user._id)
});

} catch(error){

res.status(500).json({
success:false,
message:"Server error"
});

}

};