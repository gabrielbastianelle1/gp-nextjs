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
