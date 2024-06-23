const {Schema, model, models} = require('mongoose')

const userSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    type: {type: String, default: "user"}
})

module.exports = models.User || model('User', userSchema)