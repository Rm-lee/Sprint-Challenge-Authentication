const bcrypt = require("bcryptjs")
const db = require("../database/dbConfig")

module.exports = {
 add,
 findById
}
async function add(user){
 user.password = await bcrypt.hash(user.password,10)

  const [id] = await db("users")
 .insert(user)

return findById(id)
}
function findById(id){
 return db("user")
  .where({id})
  .first("id","username")
}