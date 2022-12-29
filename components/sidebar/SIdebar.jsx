import Link from 'next/link'
import { User } from '../svgs'
import Logout from './Logout'

export default function Sidebar() {
    return (
        <main className="hidden w-[280px] lg:flex flex-col bg-sidebar">
            <p className=" relative hr w-full py-5 flex justify-center text-2xl cursor-pointer">
                Logo
            </p>
            <p className=" relative hr w-full py-5 flex justify-center text-2xl cursor-pointer">
                Pagina inicial
            </p>
            <p className=" relative hr w-full py-5 flex justify-center text-2xl cursor-pointer">
                Perfil
            </p>
            <p className=" relative hr w-full py-5 flex justify-center text-2xl cursor-pointer">
                Historico
            </p>
            <span className="flex flex-col w-4/5 m-auto p-10 items-center bg-white rounded-3xl space-y-4">
                <User />
                <div className="text-base">
                    <p>Nome: William</p>
                    <p>Idade: 34</p>
                    <p>Peso 80kg</p>
                </div>
            </span>
            <Logout />
        </main>
    )
}
