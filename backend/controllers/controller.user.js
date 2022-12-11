const { signinService, signupService } = require('../services/service.user')

export async function signinController(req, res) {
    const { email, password } = req.body

    try {
        return res.status(200).json(await signinService({ email, password }))
    } catch (error) {
        return res.status(404).json(error)
    }
}

export async function signupController(req, res) {
    const { email, password } = req.body

    try {
        return res.status(200).json(await signupService({ email, password }))
    } catch (error) {
        return res.status(404).json(error)
    }
}
