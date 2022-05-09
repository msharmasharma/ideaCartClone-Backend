const mongoose = require("mongoose")
const bcryptjs = require('bcryptjs')
const userSchema = new mongoose.Schema(
    {
        email: { type: String, required: true },
        mobile: { type: String },
        password: { type: String }
    },
    {
        versionKey: false
    }
)


userSchema.pre('save', function (next) {
    if (!this.isModified('password')) next()

    this.password = bcryptjs.hashSync(this.password, 6)
    next()
})

userSchema.methods.checkPassword = function (password) {
    return bcryptjs.compareSync(password, this.password)
}

module.exports = mongoose.model('user', userSchema)