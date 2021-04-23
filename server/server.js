const express = require('express');
const cors = require('cors');

const app = express();
const port = 8081;

app.use(cors());

app.get('/', (request, response) => {
    response.status(200).send('Hello world');
});

app.listen(port, () => {
    console.log(`Moves Reference Guide listening at http://localhost:${port}`);
});
