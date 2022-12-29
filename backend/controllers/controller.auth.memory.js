const { signin, signup } = require('../services/service.auth.memory')

export async function signupController(req, res) {
    const { email, password } = req.body

    try {
        return res.status(200).json(await signup({ email, password }))
    } catch (error) {
        return res.status(404).json(error)
    }
}

export async function signinController(req, res) {
    const { email, password } = req.body

    try {
        return res.status(200).json(await signin({ email, password }))
    } catch (error) {
        return res.status(404).json(error)
    }
}
