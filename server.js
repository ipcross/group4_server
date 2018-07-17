require('babel-register');

const fs = require('fs');
const express = require('express');
const app = express();

fs.readFile('./index.html', 'utf8', function(err, index) {
    const renderedContent = require('./render').default;
    const render = index.replace(/\{layout\}/, renderedContent);

    app.get('/', (req, res) => {
        res.send(render);
    });

    app.listen(
        3005,
        () => console.log('Server is listening on 3005')
    );
});