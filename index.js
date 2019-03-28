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

app.use(express.urlencoded());

app.get("/", function (req, res) {
    db.getCollection("games")
        .then(docs => {
            res.render("index",{games: docs});
        })
        .catch(err => {
            res.render("index",{games: []});
        });
});

app.post("/api/search", function (req, res) {
    console.log(req.body);
    db.searchOnCollection("games", req.body.title)
        .then(result => res.json(result))
        .catch(err => res.json({}))
})

app.listen(3000, function () {
    db.connect();
    console.log("Server On");
});