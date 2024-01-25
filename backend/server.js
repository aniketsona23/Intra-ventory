require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT;
const mongoose = require("mongoose");
const router = require("./router/routes");
const cors = require("cors")


app.use(cors())
app.use("/api/",router)
app.use(express.json())

mongoose
  .connect(process.env.DB_URI)
  .then(() => {
    console.log("[+] Connected to Database");
    app.listen(port, () => {
      console.log("Server started on http://localhost:" + port);
    });
  })
  .catch((err) => {
    console.log("[-] Failed to connect Database : " + err);
  });
