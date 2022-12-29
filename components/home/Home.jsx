import { useEffect, useState } from 'react'
import List from '../List'
import { medias, toFixedIfNecessary, valoresAleatorios } from './calcsAvarage'
import Button from '../Button'
import { updateProfile } from '../../services/service.user.memory'

export default function Home() {
    const [mediaPressao, setMediaPressao] = useState(0)
    const [mediaBatimento, setMediaBatimento] = useState(0)
    const [mediaSono, setMediaSono] = useState(0)

    useEffect(() => {
        medias().then((response) => {
            setMediaBatimento(toFixedIfNecessary(response.mediaBatimento, 2))
            setMediaPressao(toFixedIfNecessary(response.mediaPressao, 2))
            setMediaSono(toFixedIfNecessary(response.mediaSono, 2))
        })
    }, [])

    async function handleClick() {
        console.log(valoresAleatorios())

        window.alert('Seus dados foram sincronizados!')

        let dados = valoresAleatorios()
        await updateProfile({ dados })
    }

    return (
        <main className="bg-userBackground flex-grow flex flex-col lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:gap-2">
            <div className="col-span-2">
                <List title="Dados referentes a media de todos registos">
                    <p className="item-list">
                        Pressão arterial: {mediaPressao} MMhG
                    </p>
                    <p className="item-list">
                        Batimento cardiaco: {mediaBatimento} bpm
                    </p>
                    <p className="item-list">
                        Horas de sono: {mediaSono} horas
                    </p>
                </List>
            </div>
            <div>
                <List title="Resumo de todos os dados">
                    <div className="px-4 text-xl">
                        {`->`} Sua pressão arterial está com uma media boa.
                    </div>
                    <div className="px-4 text-xl">
                        {`->`} Seu batimento cardíaco é superior ao ideal,
                        consulte seu medico ou farmacêutico para verificar se
                        algum possivel problema.
                    </div>
                    <div className="px-4 text-xl">
                        {`->`} Nas ultimas 24h teve pouco tempo de sono,
                        aconselhado descansar.
                    </div>
                </List>
            </div>
            <div>
                <List title="Relógios desponiveis" className="w-2/3">
                    <p className="item-list">Mi band 3</p>
                    <p className="item-list">Apple-watch 4</p>
                    <Button
                        onClick={handleClick}
                        className="w-2/3 self-center bg-sincronizar text-white p-1"
                    >
                        Sincronizar
                    </Button>
                </List>
            </div>
        </main>
    )
}
