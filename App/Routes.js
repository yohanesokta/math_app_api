const { run } = require("node:test");
const { mongo } = require("./controller");
const { json } = require("body-parser");
const { sendResponse } = require("../Components/Response");

const Routes = (App) => {
    App.get("/api/get", (req, res) => {
        mongo.data_get_all(res);
    });
    App.get("/api/create", (req, res) => {
        //  { nama , token , owner }
        mongo.create_data_soal(req, res);
    });

    App.get('/api/create/soal',(req,res)=>{
        // { type , isi , id , images , token (token dari soal)}
        mongo.add_soal_data(req,res)
    })
    App.get('/api/validation/token',(req,res)=>{
        mongo.check_data_token(req,res)
    })

    App.get("*", (req, res) => {
        res.status(404).json(
            sendResponse("", "0", "Path Not Found", "Not Found", 404)
        );
    });
};

module.exports = { Routes };
