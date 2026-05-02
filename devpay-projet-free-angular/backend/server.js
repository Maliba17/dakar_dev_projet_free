const express = require('express');
const cors = require('cors');

const authRoutes = require('./routes/auth.routes');
const userRoutes = require('./routes/user.routes');

const app = express();

app.use(cors());
app.use(express.json());
app.get('/api/me', auth, (req, res) => {
  res.json({ id: 1, name: 'Mariama', email: 'test@gmail.com' });
});

app.get('/api/my-courses', auth, (req, res) => {
  res.json([
    { id: 1, title: 'Angular', progress: 70 },
    { id: 2, title: 'Node.js', progress: 40 }
  ]);
});

app.get('/api/notes', auth, (req, res) => {
  res.json([
    { course: 'Angular', score: 15 },
    { course: 'Node.js', score: 12 }
  ]);
});

app.get('/api/certificates', auth, (req, res) => {
  res.json([{ title: 'Certificat Angular' }]);
});

// ROUTES
app.use('/api', authRoutes);
app.use('/api', userRoutes);

app.listen(3000, () => {
  console.log('API running on http://localhost:3000');
});