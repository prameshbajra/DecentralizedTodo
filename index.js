const express = require('express');
const app = express();

app.use(express.static(__dirname));

app.listen(process.env.PORT || 9000, () => {
    console.log(`Listening to port ${process.env.PORT} || 3000`)
});

app.use('/', (req, res) => {
    res.sendFile(__dirname + '/src/index.html');
});