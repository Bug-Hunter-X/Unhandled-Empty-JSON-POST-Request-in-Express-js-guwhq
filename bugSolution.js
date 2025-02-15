const express = require('express');
const app = express();
app.use(express.json());
app.post('/users', (req, res) => {
  if (Object.keys(req.body).length === 0) {
    return res.status(400).json({ error: 'Request body is empty' });
  }
  try {
    const user = JSON.parse(JSON.stringify(req.body)); //Added for parsing
    console.log('Received user:', user); 
    res.status(201).send();
  } catch (error) {
    console.error('Error parsing JSON:', error);
    return res.status(400).json({ error: 'Invalid JSON format' });
  }
});
app.listen(3000, () => console.log('Server listening on port 3000'));