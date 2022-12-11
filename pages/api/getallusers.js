import users from '../../backend/database/database'

export default function handler(req, res) {
    res.status(200).json(users)
}
