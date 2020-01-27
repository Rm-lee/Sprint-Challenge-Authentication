const bcrypt = require("bcryptjs")
const db = require("../database/dbConfig")

module.exports = {
 add,
}
async function add(user){
 user.password = await bcrypt.hash(user.password,10)

  const [id] = await db("user")
 .insert(user)

return findById(id)