require("dotenv").config();
const express = require('express');
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
const userRoute = require("./routes/userRoute");
const adminRoute = require("./routes/adminRoute");
const hospitalRoute = require("./routes/hospital");
const path = require("path");


app.use("/api/user", userRoute);
app.use("/api/admin", adminRoute);
app.use("/api/hospital", hospitalRoute);


// DataBase Connection
mongoose.connect(process.env.MONGO_URL);
const connection = mongoose.connection;
connection.on("connected", () => {
  console.log("Connection is successful");
});
connection.on("error", (error) => {
  console.log("Error in connection", error);
});

//PORT 
const port = process.env.PORT || 5000;

//Starting the server
app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port,()=>{
    console.log(`Listening on port ${port}`)
});

