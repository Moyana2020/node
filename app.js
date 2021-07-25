const express = require('express');
const app = express();

app.get('/', (req,res) => {
res.send("moyana here")
});

app.listen(3000)