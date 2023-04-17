const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
const port = 9001;

// Write your code here

app.listen(port, () => console.log(`Listening on port ${port}`));
