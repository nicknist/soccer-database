const cors = require('cors');
const express = require('express');
const app = express();

app.use(express.json());
app.use(cors());

//app set first
