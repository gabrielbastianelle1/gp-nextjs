const { updateData } = require('../services/service.user.memory')

export async function updateDataController(req, res) {
    let user = req.user.user
    let dados = req.body

    try {
        return res.status(200).json(await updateData({ user, dados }))
    } catch (error) {
        return res.status(404).json(error)
    }
}
