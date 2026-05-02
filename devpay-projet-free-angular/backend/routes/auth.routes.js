const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

// fake user DB (remplace par MongoDB plus tard)
let users = [];

// REGISTER
router.post('/register', (req, res) => {
  const { name, email, password } = req.body;

  const user = { id: Date.now(), name, email, password };
  users.push(user);

  res.json({ message: 'User created' });
});

// LOGIN
router.post('/login', (req, res) => {
  const { email, password } = req.body;

  const user = users.find(u => u.email === email && u.password === password);

  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const token = jwt.sign(
    { id: user.id, email: user.email },
    'SECRET_KEY',
    { expiresIn: '1d' }
  );

  res.json({ token });
});

module.exports = router;