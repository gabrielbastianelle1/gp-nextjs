const jwt = require('jsonwebtoken')

export function updateData({ user, dados }) {
    return new Promise((resolve, reject) => {
        user.dados.push(dados)
        let token = jwt.sign({ user: user }, process.env.SECRET_KEY)
        resolve(token)
    })
}
