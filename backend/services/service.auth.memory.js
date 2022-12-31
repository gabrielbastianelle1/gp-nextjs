const { users } = require('../config/database.memory')
const jwt = require('jsonwebtoken')

export function signup({ email, password }) {
    return new Promise((resolve, reject) => {
        if (password == '') {
            reject('senha nao pode estar vaziar')
        }

        let result = users.filter((element) => {
            if (element.email == email) {
                return element
            }
        })

        if (result.length != 0) {
            reject('email ja existente')
        }

        let user = {
            id: result.length + 1,
            email: email,
            password: password,
            nome: 'William',
            idade: 20,
            peso: 70,
            dados: []
        }

        users.push(user)

        let token = jwt.sign({ user: user }, process.env.SECRET_KEY)
        resolve(token)
    })
}

export function signin({ email, password }) {
    return new Promise((resolve, reject) => {
        let result = users.filter((element) => {
            if (element.email == email) {
                return element
            }
        })

        if (result.length == 0) {
            reject('email nao cadastrado')
        }

        if (result[0].password != password) {
            reject('login incorreto')
        }

        let token = jwt.sign({ user: result[0] }, process.env.SECRET_KEY)
        resolve(token)
    })
}
