const express = require('express');
const multer = require('multer');

const app = express();
const upload = multer({ dest: 'uploads/' }); // Specify the directory to store uploaded files

app.post('/api/createUserProfile', upload.single('photo'), (req, res) => {
  // Access form data
  const name = req.body.name;
  const email = req.body.email;
  const photo = req.file; // Contains the uploaded photo file

  // Save user data and photo to your desired storage (e.g., database, file system, cloud storage, etc.)

  res.json({ message: 'Profile created successfully!' });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
