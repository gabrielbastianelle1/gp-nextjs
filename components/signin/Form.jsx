import { useState } from 'react'
import useRouter from 'next/router'
import Button from '../Button'
import { signin } from '../../services/service.auth.memory'

export default function Form() {
    const navigate = useRouter
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onChangeEmail = (event) => {
        setEmail(event.target.value)
    }
    const onChangePassword = (event) => {
        setPassword(event.target.value)
    }

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            await signin(email, password)
            navigate.push('/user')
        } catch (error) {
            window.alert(error.response.data)
            return
        }
    }

    return (
        <form className="grid grid-cols-1 grid-rows-3 gap-y-8 p-5 lg:p-16 w-9/12 min-w-[250px] bg-white lg:rounded-3xl">
            <input
                className="bg-input p-3 "
                onChange={onChangeEmail}
                value={email}
                type="text"
                placeholder="Email"
            />
            <input
                className="bg-input p-3 "
                onChange={onChangePassword}
                value={password}
                type="password"
                placeholder="Password"
            />

            <Button onClick={handleSubmit}>Login</Button>
        </form>
    )
}
