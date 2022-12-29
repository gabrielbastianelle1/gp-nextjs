import { getCurrentUser } from '../../services/service.auth'

export function medias() {
    return new Promise(async (resolve, reject) => {
        let totalPressao = 0
        let totalBatimento = 0
        let totalSono = 0
        let mediaPressao
        let mediaBatimento
        let mediaSono

        let response = await getCurrentUser()
        let dados = response.data.user.dados

        dados.forEach((element) => {
            totalBatimento = element.batimento + totalBatimento
            totalPressao = element.pressao + totalPressao
            totalSono = element.sono + totalSono
        })

        mediaSono = totalSono / dados.length
        mediaPressao = totalPressao / dados.length
        mediaBatimento = totalBatimento / dados.length

        resolve({ mediaSono, mediaPressao, mediaBatimento })
    })
}

export function valoresAleatorios() {
    let pressao = Math.floor(Math.random() * (130 - 70)) + 70
    let batimento = Math.floor(Math.random() * (150 - 70)) + 70
    let sono = Math.floor(Math.random() * (12 - 3)) + 3

    let data = new Date().toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    })

    return { pressao, batimento, sono, data }
}

export function toFixedIfNecessary(value, dp) {
    return +parseFloat(value).toFixed(dp)
}
