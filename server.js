const express = require("express");
const app = express();
const port = 3000;

const A = require("./A")
const B = require("./B")

app.get("/", (req, res) => {
    res.send("Server is running on root.")
})

app.get("/A", A);
app.get("/B", B)

app.listen(port, "0.0.0.0", () => {
  console.log(`Server running on port ${port}`);
});