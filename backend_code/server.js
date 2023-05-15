const express = require('express');
const mongoose = require('mongoose');
const routes = require('./Routes/ToDoRoutes');
const cors = require('cors');

require('dotenv').config();

const app = express();
const serverPort = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("MongoDB Connected Successfully...");
  })
  .catch((err) => {
    console.log("MongoDB Connection Error:", err);
  });

app.use(routes);

app.listen(serverPort, () => {
  console.log(`Server listening on port ${serverPort}`);
});
