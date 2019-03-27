const paths = require("./paths");
const express = require("express");
const compression = require("compression");
const app = express();

app.use(compression());

app.use(express.static(paths.root));

app.get("/", function (req, res) {
    res.sendFile(paths.index);
});

app.listen(3000, function () {
    console.log("Server On");
});