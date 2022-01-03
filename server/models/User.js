const { model, Schema} = require("mongoose");

const UserSchema = new Schema({
    name: {
        type: String,
        minlength: [2,"The name has to have at least 2 characters"],
        required: true,
    },
    lastName: {
        type: String,
        minlength: [2, "Lastname has to have at least 2 characters"],
        required: true
    },
    email: {
        type: String,
        required: true,
        validate: {
            validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message: "Please enter a valid email"
        },
        unique: true
    },
    password: {
        type: String,
        minlength: [8, "Password should have at least 8 characters"],
        required: true
    },
    deleted_at: Date
},{timestamps: true});


const bcrypt = require("bcrypt");

UserSchema.pre("save",function(next){
    bcrypt.hash(this.password,10)
        .then(hash =>{
            this.password = hash;
            next();
        });
});

const User = model("User", UserSchema)

module.exports = { User, UserSchema};