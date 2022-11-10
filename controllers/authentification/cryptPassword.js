const bcrypt = require('bcrypt')

const cryptPassword = async (password) => {
   return await bcrypt.hash(password, 10)
}

module.exports = cryptPassword