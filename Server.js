const express = require("express");

const app = express();
app.get("/", function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end(`
    <!doctype>
    <html>
        <head>
            <meta charset="utf-8">
            <title>Главная страница</title>
            <style>
                body{
                  margin: 0;
                  padding: 0;
                  text-align: center;
                }
                h1{
                  background-color: #5B2C6F;
                  color: white;
                  padding: .5em;
                  font-familt: 'Consolas'
                }
            </style>
        </head>
            <h1> Hello </h1>
            <h2>Octagon NodeJS Test</h2>
            <address>
  
        </body>
    <html>
`);
})
app.get("/static", function (request, response) {

    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end(`
    <!doctype>
    <html>
            <header> Hello </header>
            <body>Octagon NodeJS Test</body>
    <html>
`);
})
app.get("/dynamic", function (request, response) {

    console.log(request.query);
    let a = request.query.a;
    let b = request.query.b;
    let c = request.query.c;

    if (isNaN(a) || null) {
        response.send("<header>ERROR</header>");
    } else if (isNaN(b) || null) {
        response.send("<header>ERROR</header>");
    } else if (isNaN(c) || null) {
        response.send("<header>ERROR</header>");
    } else response.send(`<header>Calculated</header>
            <body>${a * b * c / 3}</body>`);

});
app.listen(3000, () => console.log('сервер запущен'));
