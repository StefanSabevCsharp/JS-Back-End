const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: [true, 'Username is required'],
        unique: true,
        minlength: [2, 'Username must be between 2 and 20 characters long'],
        maxlength: [20, 'Username must be between 2 and 20 characters long'],
    },
    email:{
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        minlength: [10, 'Email must be at least 10 characters long'],
    },
    password:{
        type: String,
        required: [true, 'Password is required'],
        minlength: [4, 'Password must be at least 4 characters long'],
    }
}, {timestamps: true});

userSchema.pre("save",async function() {
    this.password = await bcrypt.hash(this.password, 11);
});

// userSchema.virtual("repass")
// .set(function(value){
//     if(value !== this.password){
//         throw new Error("Passwords don't match");
//     }
// });

const User = mongoose.model('User', userSchema);

module.exports = User;
