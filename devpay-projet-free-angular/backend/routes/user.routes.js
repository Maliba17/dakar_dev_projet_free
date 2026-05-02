const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

// 👤 PROFIL
router.get('/me', auth, (req, res) => {
  res.json({
    name: 'Utilisateur DEVPAY',
    email: req.user.email
  });
});

// 📚 COURS
router.get('/my-courses', auth, (req, res) => {
  res.json([
    { title: 'Angular', progress: 70 },
    { title: 'Node.js', progress: 40 }
  ]);
});

// 📝 NOTES
router.get('/notes', auth, (req, res) => {
  res.json([
    { course: 'Angular', score: 15 },
    { course: 'Node.js', score: 12 }
  ]);
});

// 🎓 CERTIFICATS
router.get('/certificates', auth, (req, res) => {
  res.json([
    { title: 'Certificat Angular' }
  ]);
});

module.exports = router;