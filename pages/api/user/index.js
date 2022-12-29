const {
    getCurrentUser
} = require('../../../backend/controllers/controller.auth.memory')
const { verifyToken } = require('../../../backend/middlewares/verifyToken')

export default verifyToken(getCurrentUser)
