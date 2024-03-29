const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        min: 3,
        max: 20
    
    },
    phone: {
        type: String,
        require: true,
        max: 10
    },
    address: {
        type: String,
        require: true,
        max: 100
    },
    email: {
        type: String,
        require: true,
        max: 50,
        unique: true
       
    },
    password: {
        type: String,
        require: true,
        min: 8,
        max: 30
    },
    isAdmin: {
        type: Boolean,
        default: false
    }    
},
{ timestamps: true }
);

const Users = mongoose.model("Users", userSchema);
module.exports = Users;


