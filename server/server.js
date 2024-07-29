const express = require('express');
const cors = require('cors');
// const axios = require("axios");

const app = express();
const port = 8000; // You can choose any port

app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log(`Server is running on port number ${port}`);
});
// Health Check
app.get('/', (req, res) => {
  res.send('Hello from the Node.js backend!');
});

app.get("/message", (req, res) => {
  res.json({ message: "Take a sip!" });
});






// axios
//     .get("https://jsonplaceholder.typicode.com/posts/1")
//     // Show response data
//     .then((res) => console.log(res.data))
//     .catch((err) => console.log(err));
