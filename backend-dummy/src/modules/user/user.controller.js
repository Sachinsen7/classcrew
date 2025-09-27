const bcrypt = require('bcryptjs');
const User = require('./auth.model');

const register = async (req, res) => {
    try {
        const  {name, email, password} = req.body;

        const existingUser = await User.findOne({email});
        if(existingUser) return res.status(400).json({message: "User already exists"});

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({name, email, password: hashedPassword});

        await user.save();

        res.status(201).json({message:"User registered successfully", user: {id: user._id, name, email, role} });
    }
    catch(err) {
        res.status(500).json({message: err.message});
    }
}

module.exports = register;