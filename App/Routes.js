const { run } = require("node:test");
const { mongo } = require("./controller");
const { json } = require("body-parser");
const { sendResponse } = require("../Components/Response");

const Routes = (App) => {
    App.post("/api/get", (req, res) => {
        mongo.data_get_all(res);
    });
    App.post("/api/get/soal", (req, res) => {
        // require ( token )
        mongo.get_main_soal(req, res);
    })
    App.post("/api/create", (req, res) => {
        //  { nama , token , owner }
        mongo.create_data_soal(req, res);
    });

    App.post('/api/create/materi', (req, res) => {
        // {isi  , images , token (token dari soal)}
        mongo.add_soal_materi(req, res)
    })
    App.post('/api/validation/token', (req, res) => {
        mongo.check_data_token(req, res)
    })
    App.post('/api/create/users', (req, res) => {
        //  {toke , username , score}
        mongo.add_data_user(req, res)
    })

    App.post('/api/create/soal', (req, res) => {
        mongo.add_data_soal(req, res)
    })
    App.get('/', (req, res) => {
        res.json(
            sendResponse('IS A HOMEPATH', 1, "Wellcome to API on Github")
        )
    })
    App.get("*", (req, res) => {
        res.status(404).json(
            sendResponse("", "0", "Path Not Found", "Not Found", 404)
        );
    });
};

module.exports = { Routes };
