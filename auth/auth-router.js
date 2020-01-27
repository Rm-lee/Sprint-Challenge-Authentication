const router = require('express').Router();
const jwt = require("jsonwebtoken")
const restrict = require("./authenticate-middleware")
const secrets = require("../config/secrets")
const Users = require("../users/user-model")
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

router.get('/login', (req, res) => {
  // implement login
  res.status(200).json({me:"done"})
});



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
