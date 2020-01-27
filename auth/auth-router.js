const router = require('express').Router();

router.post('/register', (req, res) => {
  // implement registration
 
  
});

router.post('/login', (req, res) => {
  // implement login
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
