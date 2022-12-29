import { useEffect, useState } from 'react'
import { getCurrentUser } from '../../services/service.auth'
import Header from './Header'

export default function List() {
    const [dados, setDados] = useState(undefined)

    useEffect(() => {
        setTimeout(() => {
            getCurrentUser().then((response) =>
                setDados(response.data.user.dados)
            )
        }, 1000)
    }, [])

    if (dados == undefined) {
        return <div>loading</div>
    }

    return (
        <main className="relative w-11/12  lg:min-w-min lg:max-h-[700px] lg:overflow-y-scroll bg-white rounded-3xl">
            <Header />
            <div className="grid grid-cols-4 gap-5 text-center ">
                {dados.map((element) => {
                    return (
                        <>
                            <p>{element.data}</p>
                            <p>{element.batimento} bpm</p>
                            <p>{element.pressao} MMhG</p>
                            <p>{element.sono} h</p>
                        </>
                    )
                })}
            </div>
        </main>
    )
}
