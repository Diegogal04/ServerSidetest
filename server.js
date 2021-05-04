const { response } = require('express');
const express = require('express');
const { request } = require('http');
const app = express();
app.listen(3000, () => console.log('listening at port 3000'));
app.use(express.static('public'));

app.post('/api', (request, response) => {
    console.log(request.body);
});