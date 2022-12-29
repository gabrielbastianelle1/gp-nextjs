import axios from 'axios'
import { host } from './host'

export function updateProfile({ dados }) {
    return new Promise(async (resolve, reject) => {
        try {
            let response = await axios.post(
                `http://${host}:3000/api/user/updateprofile`,
                dados,
                {
                    headers: {
                        'x-access-token': localStorage.getItem('token')
                    }
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
