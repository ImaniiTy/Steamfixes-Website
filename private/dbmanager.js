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
        return this.db.collection(collection).find({}).toArray()
    }

    searchOnCollection(collection, query) {
        return this.db.collection(collection).find({ 
            title: {$regex: `.*${query}.*`, $options: 'i'}
        }).toArray()
    }
}

const dbManager = new DBManager("mongodb://191.186.171.237:27017","website");

module.exports = dbManager;