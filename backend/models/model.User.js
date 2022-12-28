const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const { isEmail } = require('validator')

const User = new mongoose.Schema(
    {
        email: {
            type: String,
            required: [true, 'Insira o campo email corretamente'],
            unique: true,
            lowercase: true,
            validate: [isEmail, 'Insira um email válido']
        },
        password: {
            type: String,
            required: [true, 'Insira a password']
        },
        dados: {
            type: Object
        }
    },

    {
        versionKey: false,
        collection: 'User'
    }
)

User.methods.encryptPassword = async function () {
    this.password = await bcrypt.hashSync(this.password, bcrypt.genSaltSync(10))
}

User.methods.comparePassword = async function (req, user) {
    return await bcrypt.compareSync(req.password, user.password)
}

module.exports = mongoose.models.User || mongoose.model('User', User)
