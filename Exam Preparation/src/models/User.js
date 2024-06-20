const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    createdCourses:[{
        type: mongoose.Types.ObjectId,
        ref: 'Course'
    }]
}, {timestamps: true});

userSchema.pre("save",async function() {
    this.password = await bcrypt.hash(this.password, 11);
});

userSchema.virtual("repass")
.set(function(value){
    if(value !== this.password){
        throw new Error("Passwords don't match");
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
