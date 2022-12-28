import { logout } from '../../services/service.auth'
import useRouter from 'next/router'

export default function Logout() {
    const navigate = useRouter

    const handleOnClick = () => {
        logout()
        navigate.push('/')
    }

    return (
        <button className="text-2xl" onClick={handleOnClick}>
            Terminar Sessão
        </button>
    )
}
