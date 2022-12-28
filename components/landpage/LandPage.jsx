import { Landpage } from '../svgs'

export default function LandPage() {
    return (
        <main className="flex-grow grid lg:grid-cols-2 items-center bg-userBackground">
            <span className="hidden lg:flex items-center justify-center">
                <Landpage />
            </span>
            <div className="space-y-10 p-20  text-2xl">
                <p>
                    Esta aplicação tem como objetivo ajudar a monitorar os dados
                    biomedicos de cada pessoa. Estes dados são obtidos através
                    da pulseira ou relogio inteligente.
                </p>
                <p>
                    Desta forma o usuario consegue monitorar se as atividades
                    que faz no dia a dia estão a fazer-lhe bem ou a prejudicar a
                    sua saúde. Assim para o bom funcionamento da app é
                    aconselhavel andar com a sua pulseira e/ou relogio o maximo
                    de tempo possivel para que os dados correspondam a realidade
                    do dia a dia de cada 1.
                </p>
            </div>
        </main>
    )
}
