const express = require("express");
const app = express();
const cors = require("cors");
const { Routes } = require("./App/Routes");

const corsOption = {
    origin: "*",
};

app.use(cors(corsOption));
app.use(express.json());

Routes(app);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Running port ${port}`));
