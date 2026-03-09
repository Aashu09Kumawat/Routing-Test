const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Server is running on root");
})
app.get("/test", (req, res) => {
    res.send("You are testing a /test router")
})
app.listen(port, () => {
  console.log(`Server (Master) running on port ${port}`);
});
