const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hi, this is a codePipeline project with elastic beanstalk.. Added Manual code review stage'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
