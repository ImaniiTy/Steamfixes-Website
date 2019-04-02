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
    /*
    db.getCollection("teste")
        .then(data => {
            res.render("index",{games: data[0].result, total: data[0].total[0].value});
        })
        .catch(err => {
            res.render("index",{games: [], total: 0});
        });
    */
   res.render("index");
});

app.post("/api/search", function (req, res) {
    console.log(req.body);
    db.searchOnCollection("teste", req.body.title, {page: req.body.page})
        .then(data => res.json({games: data[0].result, total: data[0].total[0].value}))
        .catch(err => res.json({games: [], total: 0}))
});

app.get('*', function(req, res){
    res.render("404");
});

app.listen(3000, function () {
    db.connect();
    console.log("Server On");
});