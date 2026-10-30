
const express = require('express');
const cors = require('cors');

// Sample milestone records stored in memory
const milestones = [
  {
    id: 1,
    name: 'Create Angular Components',
    status: 'Completed'
  },
  {
    id: 2,
    name: 'Create Reactive Components',
    status: 'Completed'
  },
  {
    id: 3,
    name: 'Develop Express Backend',
    status: 'In Progress'
  }
]

// create the Express application
const app = express();

const PORT = 8000;

// Allow requests from Angular.
app.use(cors({
  origin: 'http://localhost:4200'
}));

app.use(express.json());

// Respond to requests at the home url
app.get('/',(req, res) => {
  res.send('Project Progress Tracker API is running!');
});

// Retrivece milestone records.
app.get('/milestones', (req,res) => {
  console.log('GET request received for milesones');

  // Return milestone data as JSON.
  res.status(200).json(milestones);
})

// Recieive milestone information from Angular.
app.post('/milestones',(req,res) => {
  const { name, status } = req.body;

  // Display the submitted information.
  console.log('New milestone received:');
  console.log('Name:', name);
  console.log('Status:', status);

  // Return a confirmation.
  res.status(200).json({
    message: 'Milestone received successfully!'
  });
});


// Start the server.
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
