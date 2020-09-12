const express = require('express');
const port = 4000;
const app = express();

app.use(express.static("dist"))


app.listen(port, () => {console.log(`Server listening on Port ${port}...`)})