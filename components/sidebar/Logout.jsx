import { logout } from '../../services/service.auth'
import useRouter from 'next/router'
import Button from '../Button'

export default function Logout() {
    const navigate = useRouter

    const handleOnClick = () => {
        logout()
        navigate.push('/')
    }

    return (
        <Button
            onClick={handleOnClick}
            className="bg-red-700 text-white mt-auto rounded-none py-3"
        >
            Sair
        </Button>
    )
}
