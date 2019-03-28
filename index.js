const paths = require("./paths");
const db = require("./private/games-fetcher");

const express = require("express");
const compression = require("compression");
const exphbs = require('express-handlebars');

const app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(compression());

app.use(express.static(paths.root));

app.get("/", function (req, res) {
    res.render("index", db());
});

app.listen(3000, function () {
    console.log("Server On");
});