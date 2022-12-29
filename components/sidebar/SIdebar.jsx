import Link from 'next/link'
import { useEffect, useState } from 'react'
import { getCurrentUser } from '../../services/service.auth'
import { User } from '../svgs'
import Logout from './Logout'

export default function Sidebar() {
    const [user, setUser] = useState({})

    useEffect(() => {
        getCurrentUser().then((response) => setUser(response.data.user))
    }, [])

    return (
        <main className="hidden min-w-[280px] lg:flex flex-col bg-sidebar">
            <Link href="/user">
                <p className=" relative hr w-full py-5 flex justify-center text-2xl cursor-pointer">
                    Logo
                </p>
            </Link>
            <Link href="/user">
                <p className=" relative hr w-full py-5 flex justify-center text-2xl cursor-pointer">
                    Pagina Inicial
                </p>
            </Link>
            <Link href="/user/profile">
                <p className=" relative hr w-full py-5 flex justify-center text-2xl cursor-pointer">
                    Perfil
                </p>
            </Link>
            <Link href="/user/registers">
                <p className=" relative hr w-full py-5 flex justify-center text-2xl cursor-pointer">
                    Historico
                </p>
            </Link>
            <span className="flex flex-col w-4/5 m-auto p-10 items-center bg-white rounded-3xl space-y-4">
                <User />
                <div className="text-base">
                    <p>Nome: {user.nome}</p>
                    <p>Idade: {user.idade}</p>
                    <p>Peso: {user.peso}kg</p>
                </div>
            </span>
            <Logout />
        </main>
    )
}
