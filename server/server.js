require("dotenv").config();

const express = require("express")
const app = express();

require("./config/mongoConnect")();

app.use(express.json())

app.use('/api', require('./routes/api'))

app.listen(process.env.PORT, () => console.log(`Listening on port ${process.env.PORT}`));