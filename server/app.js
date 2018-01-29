const express = require('express');
const app = express();

app.use(express.static(__dirname + '/../client/'));

app.listen(7000, () => console.log('Listening on port 7000.'));
