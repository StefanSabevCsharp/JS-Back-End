const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    email:{
        type: String,
        required: [true, 'Email is required'],
        unique: true,
    },
    password:{
        type: String,
        required: [true, 'Password is required'],
    },
    username:{
        type: String
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
