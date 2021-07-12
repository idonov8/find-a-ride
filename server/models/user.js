const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    userName: {type: String, required: true, unique: true},
    firstName: {type: String, required: true},
    lastName: {type: String, required:true },
    dateOfBirth: {type: Date, required:true},
    gender:{type: String, required:true, enum:['Male','Female','Other']},
    password: {type: String, required: true},
})

module.exports = mongoose.model('User', userSchema)
