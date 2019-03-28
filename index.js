const paths = require("./paths");
const db = require("./private/dbmanager");

const express = require("express");
const compression = require("compression");
const exphbs = require('express-handlebars');

const app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(compression());

app.use(express.static(paths.root));

app.get("/", function (req, res) {
    db.getCollection("games")
        .then(docs => {
            res.render("index",{games: docs});
        })
        .catch(err => {
            res.render("index",{games: []});
        });
});

app.listen(3000, function () {
    db.connect();
    console.log("Server On");
});