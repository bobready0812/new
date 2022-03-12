const express = require("express");
const app = express();
const basic = require("./router/index");
const bodyParser = require('body-parser')
const cors = require('cors');

app.use(bodyParser.json())
app.use(cors());
app.use("/", basic);

const port = 3001;
app.listen(port, () => console.log(`listening on port ${port}`));