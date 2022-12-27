const { connectDatabase } = require('../../backend/config/database.connection')
const { insertInitialData } = require('../../backend/config/initialData')

export default function handler(req, res) {
    connectDatabase()
    insertInitialData()
    res.status(200).json('ready')
}
