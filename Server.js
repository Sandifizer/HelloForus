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
    
    let Fields = ["a", "b", "c"];
    for (let key in request.query) {
        if (!Fields.includes(key)) {
          response.send("<header>ERROR</header>"); 
        }
    }
    
    for (let pr in request.query) {
        if (isFinite(request.query[pr]) || request.query[pr] == null) {
            response.send("<header>ERROR</header>"); 
        } else {
            response.send(`<header>Calculated</header><body> ${request.query.a * request.query.b * request.query.c / 3}</body>`);
        }
        return 0;
    }

    
})
app.listen(3000, () => console.log('сервер запущен')); 
