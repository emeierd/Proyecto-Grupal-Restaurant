const { User } = require("../models/User");
const bcrypt = require("bcrypt");
const token = require("jsonwebtoken");

const create = async (req, res) => {
    try {
        const { name, lastName, email, password } = req.body;
        const user = await User({ name, lastName, email, password });
        await user.save();
        user.password = bcrypt.hash(password,10);
        res.status(201).json({ response: "OK", user: user});
    } catch (err) {
        console.error(err);
        res.status(500).json({ response: "Error", message: err})
    }
};

const remove = async (req, res) => {
    try {
        const { id } = req.body;
        const user = await User.findById(id);
        if(!user) return res.status(404).json({ response: "Error", message: "Not found"});
        user.deleted_at = new Date();
        await user.save();
        res.status(200).json({ response: "OK", message: `User ${user.email} has been deleted`})
    } catch (err) {
        console.error(err);
        res.status(500).json({ response: "Error", message: err})
    }
};

const edit = async (req, res) => {
    try {
        const { id, name, lastName } = req.body;
        const user = await User.findById(id);
        if(!user) return res.status(404).json({ response: "Error", message: "Not found"});
        if(user.deleted_at) throw "Cannot modify a deleted user";
        if(name) user.name = name;
        if(lastName) user.lastName = lastName;
        await user.save();
        res.status(200).json({ response: "OK", message: `User ${user.email} has been modified`})
    } catch (err) {
        console.error(err);
        res.status(500).json({ response: "Error", message: err})
    }
};

const get = async (req, res) => {
    try {
        const { id } = req.body;
        const user = await User.findById(id);
        if(!user) return res.status(404).json({ response: "Error", message: "Not found"});
        if(user.deleted_at) return res.status(500).json({ response: "Error", message: "User is deleted"});
        console.log(user)
        res.status(200).json({ repsonse: "OK", user: user})
    } catch (err) {
        console.error(err);
        res.status(500).json({ response: "Error", message: err})
    }
}

const login = async (req, res) => {
    try {
        const {email, password: loginPassword} = req.body;
        const user = await User.findOne({email:email});
        console.log(user)

        if(!user) return res.status(404).json({ response: "Error", message: "Not found"});
        if(user.deleted_at) return res.status(500).json({ response: "Error", message: "User is deleted"});

        const payload = {
            _id: user.id
          };

        const jwtToken = token.sign(payload, process.env.JWT_SECRET);
       
        const {password: userPassword } = user;
        const match = await bcrypt.compare(loginPassword, userPassword);

        if (!match | user===null)
            return res.status(500).json({ response: "Error", message:"invalid credentials"});
        else{ return res
            .cookie('usertoken', jwtToken, process.env.JWT_SECRET, {
                httpOnly: true,
            })
            .json({ response: "OK", message: `User ${user.email} has logged in successfully`});
        } 

    } catch (err) {
        console.error(err)
        res.status(500).json({ response: "Error", message: err});
    }
}

const logout = async (req, res) => {
    try {
        res.clearCookie('usertoken');
        res.status(200).json({ response: "OK", message: `Logged out successfully`});

    } catch (err) {
        console.error(err);
        res.status(500).json({ response: "Error", message: err});
    }
}

module.exports = { create, remove, edit, get, login, logout };