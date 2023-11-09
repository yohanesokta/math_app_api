const { run } = require("node:test");
const { mongo } = require("./controller");
const { json } = require("body-parser");
const { sendResponse } = require("../Components/Response");

const Routes = (App) => {
    App.get("/api/get", (req, res) => {
        mongo.data_get_all(res);
    });
    App.get("/api/create", (req, res) => {
        mongo.create_data_soal(req, res);
    });

    App.get("*", (req, res) => {
        res.status(404).json(
            sendResponse("", "0", "Path Not Found", "Not Found", 404)
        );
    });
};

module.exports = { Routes };
