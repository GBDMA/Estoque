const jwt = require('jsonwebtoken');

const generateToken = (user) => {
  const token = jwt.sign({ id: user.id, username: user.username }, 'your_secret_key', {
    expiresIn: '1h', // Define o tempo de expiração do token
  });
  return token;
};

const verifyToken = (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(403).json({ message: 'Token não fornecido' });
  }

  jwt.verify(token, 'your_secret_key', (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Falha na autenticação do token' });
    }
    req.user = decoded;
    next();
  });
};

module.exports = { generateToken, verifyToken };

module.exports = { generateToken, verifyToken };