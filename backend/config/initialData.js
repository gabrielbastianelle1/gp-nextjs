const User = require('../models/model.User')

function insertInitialData() {
    User.find({})
        .then((response) => {
            let totalUsersInserted = response.length

            if (totalUsersInserted == 0) {
                let user = new User({
                    email: 'user@example.com',
                    password: '123'
                })

                user.encryptPassword()
                user.save()
            }
        })
        .catch((error) => console.log(error))
}

module.exports = {
    insertInitialData
}
