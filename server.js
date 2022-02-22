//Install express server
const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + './dist/my-site'));

app.get('/*', (req, res) =>
    res.sendFile(__dirname + '/dist/my-site/index.html'),
);

app.listen(PORT, () => {
    console.log('Servidor iniciado na porta ' + PORT);
});