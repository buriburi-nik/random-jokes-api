// index.js

const express = require('express');
const app = express();

// Define the port to run on
const PORT = process.env.PORT || 3000;

// An array of predefined jokes
const jokes = [
  "Why don't scientists trust atoms? Because they make up everything!",
  "I told my computer I needed a break, and it said 'No problem – I'll go to sleep.'",
  "Why did the scarecrow win an award? Because he was outstanding in his field!",
  "I'm reading a book on anti-gravity. It's impossible to put down!",
  "Why don't programmers like nature? It has too many bugs."
];

// GET endpoint to return a random joke
app.get('/api/jokes/random', (req, res) => {
  // Pick a random index from the jokes array
  const randomIndex = Math.floor(Math.random() * jokes.length);
  const randomJoke = jokes[randomIndex];

  // Respond with the random joke in JSON format
  res.json({ joke: randomJoke });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
