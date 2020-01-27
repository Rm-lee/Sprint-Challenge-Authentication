const router = require('express').Router();
const jwt = require("jsonwebtoken")
const restrict = require("./authenticate-middleware")
const secrets = require("../config/secrets")
const Users = require("../users/user-model")
const bcrypt = require("bcryptjs")
router.post('/register', (req, res) => {
  // implement registration
 Users.add(req.body)
 .then(ret => {
   res.status(201).json(ret)
 })
 .catch( err => {
  res.status(500).json(err)
 })
  
});



router.post('/login', async (req,res,next) => {
  try {
    const {username,password} = req.body
    const user = await Users.findBy({username}).first()
    const passwordValid = await bcrypt.compare(password,user.password)
    if( user && passwordValid) {
      const token = generateToken(user)
      res.status(200).json({
        message:`User ${user.username} Logged in`,
        token
      })

    }
    else{
      res.status(401).json({
        message: "Not Authorized"
      })
    }
  }
  catch(err){
    next(err)
  }
})

//generate token
function generateToken(user){
  const payload = {
      subject: user.id,
      username: user.username,
  }
  const options = {
      expiresIn: '1d'
  }
  return jwt.sign(payload, secrets.jwtSecret, options)
}
module.exports = router;
