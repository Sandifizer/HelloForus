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

    let i = 0;//счётчик который считает неправильные переменные 
    let arr = { a, b, c }; //даже если будет 1000 значений этот код их воспримет)
    for (let pr in arr) {
        if (isNaN(arr[pr]) || arr[pr] == null) {
            i += 1;
        }
    }

    //если счётчик неправильных переменных хотябы больше 1 ,то выводиться ошибка 
    if (i == 0) {
        response.send(`<header>Calculated</header><body> ${a * b * c / 3 }</body>`);
    } else {
      response.send("<header>ERROR</header>");  
    }
   
})
app.listen(3000, () => console.log('сервер запущен'));
