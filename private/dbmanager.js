const mongo = require("mongodb");

class DBManager {

    constructor(url, dbName) {
        this.url = url;
        this.dbName = dbName;

        this.client = new mongo.MongoClient(url);
        this.db;
    }

    connect() {
        this.client.connect()
            .then(() => {
                console.log("Mongo: Connected");
                this.db = this.client.db(this.dbName);
            })
            .catch(err => {
                console.log("Mongo: Fail to connect");
            });
    }

    getCollection(collection) {
        return this.searchOnCollection(collection,"");
    }

    searchOnCollection(collection, query, {page = 1, limit = 18} = {}) {
        return this.db.collection(collection).aggregate([
            {$facet: {
                total: [
                    {$match: {title: {$regex: `.*${query}.*`, $options: 'i'}}},
                    {$count: "value"}
                ],
                result: [
                    {$match: {title: {$regex: `.*${query}.*`, $options: 'i'}}},
                    {$addFields: {
                        dateOrder: {
                            $dateFromString: {
                                dateString: "$date",
                                format: "%m/%d/%Y"
                            }
                        }
                    }},
                    {$sort: {
                        dateOrder: -1
                    }},
                    {$skip: (page - 1)*limit},
                    {$limit: limit}
                ]
            }}
        ]).toArray();
    }

    addOne(collection, item) {
        return this.db.collection(collection).insertOne(item);
    }

    addMany(collection, items) {
        return this.db.collection(collection).insertMany(items);
    }

    teste() {
        let games = [];
        for (let i = 0; i < 30; i++) {
            games.push({
                title: `teste${i}`,
                img: "https://steamcdn-a.akamaihd.net/steam/apps/814380/header.jpg?t=1553652567",
                date: i < 10 ? `01/0${i}/2022` : `01/${i}/2022`,
                categories: ["Singleplayer", "Multiplayer"],
                steam_url: "https://store.steampowered.com/app/814380/Sekiro_Shadows_Die_Twice/",
                fix_url: ""
            });
        }
        this.addMany("teste", games);
    }
}

const dbManager = new DBManager("mongodb://191.186.171.237:27017","website");

module.exports = dbManager;