const db = require("../models");

module.exports = {
  
    findAll: (req, res) => {
        db.Book.find(req.query).sort({date: -1}).then((dbBook) => {
            res.json(dbBook);
        }).catch(err => {
            res.json(err);
        });
    },

    create: (req, res) => {
        db.Book.create(req.body).then((dbBook) => {
            res.json(dbBook);
        }).catch(err => {
            res.json(err);
        });
    },

    remove: (req, res) => {
        db.Book.findById({ _id: req.params.id }).then((dbBook) => {
            dbBook.remove();
        }).then((dbBook) => {
            res.json(dbBook);
        }).catch(err => {
            res.json(err);
        });
    }

};