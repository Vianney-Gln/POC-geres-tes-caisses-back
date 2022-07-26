const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 3002;
const cors = require("cors");
const pool = require("./db-config");
const { setupRoute } = require("./routes");

// Check connection db
pool.getConnection((err, conn) => {
  if (err) {
    console.error(`error connecting${err.stack}`);
  } else {
    console.log(`connected as id ${conn.threadId}`);
  }
});

// Cross origin
app.use(cors());

// Turning datas into json
app.use(express.json());

// Routing
setupRoute(app);

// Test server
app.listen(port, () => console.log(`server listening on port ${port}`));
