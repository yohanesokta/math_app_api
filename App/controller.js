const { MongoClient, ServerApiVersion } = require("mongodb");
const { sendResponse } = require("../Components/Response");
require("dotenv").config();

/*
    Setup variable untuk awal landasan constant fungsi
    yang akan dipakai
*/

const uri = process.env.DB_URI;

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});
const db = client.db(process.env.DB_NAME);

/*
    Setelah Semua ter setup : Sekarang Waktunya untuk pemberian class
    class mongodb_system adalah class utama yang dipakai dalam koneksi
    ke database mongodb dan function nya
*/

class mongodb_system {
    async data_get_all(res) {
        try {
            await client.connect();
            let promise = await db.collection("soal").find().toArray();
            res.json(sendResponse(promise));
        } finally {
            await client.close();
        }
    }
    // 
    async create_data_soal(req, res) {
        let data = {
            'nama': req.query.nama || 'null',
            'token': req.query.token || 'null',
            'owner': req.query.owner || 'null',
            'Soal': []
        };

        try {
            await client.connect()
            await db.collection('soal').Soal.insertOne(data);
            res.json(sendResponse('', '', 'Data Added Succses'))
        }
        finally {
            await client.close();
        }
    }
}

const mongo = new mongodb_system();

module.exports = { mongo };
