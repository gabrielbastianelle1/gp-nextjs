const {
    updateDataController
} = require('../../../backend/controllers/controller.user.memory')
const { verifyToken } = require('../../../backend/middlewares/verifyToken')

export default verifyToken(updateDataController)
