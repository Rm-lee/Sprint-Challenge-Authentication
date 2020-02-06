const bcrypt = require("bcryptjs")
const db = require("../database/dbConfig")

module.exports = {
 add,
 findById,
 findBy,
}
async function add(user){
 user.password = await bcrypt.hash(user.password,10)
 
  const [id] = await db("users")
 .insert(user)
return findById(id)
}
function findById(id){
 return db("users")
  .where({id})
  .first("id","username")
}
function findBy(filter) {
 return db("users")
   .where(filter)
   .select("id", "username", "password")
}