const express = require("express");
const app = express();
const port = 5726;

app.get("/", (req, res) => {
    res.send("Server is running on root");
})
app.listen(port, () => {
  console.log(`Server (Master) running on port ${port}`);
});
