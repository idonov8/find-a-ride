const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    email: {
        type: String, 
        unique: true,
        trim: true,
        lowercase: true,
        required: 'Email address is required',
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    firstName: {type: String, required: true},
    lastName: {type: String, required:true },
    dateOfBirth: {type: Date, required:true},
    gender:{type: String, required:true, enum:['Male','Female','Other']},
    password: {type: String, required: true},
})

module.exports = mongoose.model('User', userSchema)
