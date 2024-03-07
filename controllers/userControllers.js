const jwt=require('jsonwebtoken')
const bcrypt=require('bcryptjs')
const asyncHandler=require('express-async-handler')
const User=require('../model/usersSchema')


//@ post api/users
const registerUser=asyncHandler(async(req,res)=>{
    const{email,password}=req.body;
    console.log(email);
    if(!email || !password)
    {
        res.status(400)
        throw new Error('Please add all fields');
    }

    //checking if alreadya user
    const userExists=await User.findOne({email})
    if(userExists)
    {
        res.status(400)
        throw new Error('User already exists');
    }

    //Hash Paswword
    const salt=await bcrypt.genSalt(10);
    const hashedPassword=await bcrypt.hash(password,salt);

    //storing in database
    const user=await User.create({
        email,
        password:hashedPassword

    })

    if(user){
        res.status(201).json({
            _id:user.id,
            //name:user.name,
            email:user.email,
            token:generateToken(user._id)
        })

    }
    else {
        res.status(400)
        throw new Error('Invalid user data')
    }
})


//@ POST api/users/login
const loginUser=asyncHandler(async(req,res)=>{
    const {email, password}=req.body;

    const user=await User.findOne({email});

    if(user&&(await bcrypt.compare(password,user.password))){
        const token = generateToken(user._id);

        res.cookie('user_id', user.id);     
        res.cookie('email', user.email);
        res.cookie('token', token);

    
        res.status(201).send('Cookie set successfully');}
        else {
            res.status(400);
            throw new Error('Invalid credentials');
        }
    
})

const getMe= asyncHandler(async (req,res)=>{
    //const{_id,name,email}=await User.findById(req.user.id);
    const{_id,email}=await User.findById(req.user.id)
    res.status(200).json({
        id:_id,
        //name,
        email,
    })

})
// const registerUser=asyncHandler(async(req,res)=>{
//     res.status(200).json({message:'Get Goals'})
// })

const generateToken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{
        expiresIn:'30d',
    })
}

module.exports={
    registerUser,
    loginUser,
    getMe

}