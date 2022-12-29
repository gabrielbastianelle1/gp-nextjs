import axios from 'axios'
import { host } from './host'

export function signup(email, password) {
    return new Promise(async (resolve, reject) => {
        try {
            let response = await axios.post(
                `http://${host}:3000/api/signupmemory`,
                {
                    email: email,
                    password: password
                }
            )
            localStorage.setItem('token', response.data)
            return resolve(response.data)
        } catch (error) {
            console.log(error)
            return reject(error)
        }
    })
}

export function signin(email, password) {
    return new Promise(async (resolve, reject) => {
        try {
            let response = await axios.post(
                `http://${host}:3000/api/signinmemory`,
                {
                    email: email,
                    password: password
                }
            )
            localStorage.setItem('token', response.data)
            return resolve(response.data)
        } catch (error) {
            return reject(error)
        }
    })
}

export function logout() {
    localStorage.removeItem('token')
}

export async function getCurrentUser() {
    const response = await axios.get(
        `http://${host}:3000/api/user`,

        {
            headers: {
                'x-access-token': localStorage.getItem('token')
            }
        }
    )

    return response
}
