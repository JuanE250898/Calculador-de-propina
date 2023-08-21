const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT
app.use(express.static(__dirname));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname+"/View/Presentador.html"))
});

app.listen(port || 3000, () => {
    console.log("server running on port:", port)
});