/* 
  complete the middleware code to check if the user is logged in
  before granting access to the next middleware/route handler
*/
const jwt = require('jsonwebtoken')
const jsec = process.env.JWT_SECRET || 'bologne'
module.exports = (req,res,next) =>{
 if(!req.headers.token){
  res.status(401).json({ you: 'shall not pass!' });

 }
  const {token} = req.headers
  const decoded = token
  ? jwt.verify(token,jsec)
  : false;

  if (decoded){
    req.token = decoded
    next()
  }
  else{
    res.status(401).json({ you: 'shall not pass!' });

  }
}


 