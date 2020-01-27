/* 
  complete the middleware code to check if the user is logged in
  before granting access to the next middleware/route handler
*/
const bcrypt = require("bcryptjs")
const Users = require("../users/user-model")


module.exports = () => {
  const authErr = {
    message: "Invalid Token",
  }

  return async (req, res, next) => {
    try {
      const { token } = req.headers
      if (!token) {
        return res.status(401).json(authErr)
      }
      const user = await usersModel.findBy({ username }).first()
      if (!user) {
        return res.status(401).json({authErr})
      }

     
      next()
    } catch (err) {
      next(err)
    }
  }
}