const users = require('../database/database')

export function signinService({ email, password }) {
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
            reject('password errada')
        }

        resolve('logado')
    })
}

export function signupService({ email, password }) {
    return new Promise((resolve, reject) => {
        let result = users.filter((element) => {
            if (element.email == email) {
                return element
            }
        })

        if (result.length != 0) {
            reject('email ja existente')
        }

        users.push({
            email,
            password
        })

        resolve('conta criada')
    })
}
