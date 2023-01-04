import List from '../List'
import { useEffect, useState } from 'react'
import { getCurrentUser } from '../../services/service.auth'
import Button from '../Button'

export default function Profile() {
    const [user, setUser] = useState(undefined)

    useEffect(() => {
        getCurrentUser().then((response) => setUser(response.data.user))
    }, [])

    if (user == undefined) {
        return <div>loading</div>
    }

    return (
        <main className="bg-userBackground flex-grow">
            <List title="Perfil">
                <p className="item-list">Email: {user.email}</p>
                <p className="item-list">Password: {user.password}</p>
                <p className="item-list">Nome: {user.nome}</p>
                <p className="item-list">Idade: {user.idade}</p>
                <p className="item-list">Peso: {user.peso}</p>
                <p className="item-list">Total registos: {user.dados.length}</p>
                <Button className="w-2/3 self-center bg-sincronizar text-white p-1">
                    Salvar
                </Button>
            </List>
        </main>
    )
}
