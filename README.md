# Random Jokes API

This is a simple Node.js project that provides a random joke through a RESTful API endpoint. It uses Express.js to handle HTTP requests and returns a random joke in JSON format.

## Features

- **Random Joke Endpoint:**  
  A GET endpoint `/api/jokes/random` that returns a random joke each time it is accessed.

- **Predefined Jokes:**  
  The API uses an array of predefined jokes. You can easily extend or modify this list.

## Prerequisites

- [Node.js](https://nodejs.org/) installed on your local machine.
- [npm](https://www.npmjs.com/) comes with Node.js.

## Installation

Follow these steps to set up and run the project locally:

1. **Clone the Repository:**
   ```bash
   git clone <repository-url>
   cd random-jokes-api
   ```

## Install Dependencies

```bash
npm install
```

## ▶️ Running the Project

To start the server, run:

````bash
node index.js
## 📡 API Endpoint

### 🎭 Get a Random Joke

- **Endpoint:** `/api/jokes/random`
- **Method:** `GET`

---

### 📥 Example Request

```bash
curl http://localhost:3000/api/jokes/random
````
