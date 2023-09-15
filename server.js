const express = require("express");

const app = express();

app.get("/", function(request, response){
  response.writeHead(200,{'Content-Type':'text/html'});
  response.end(`
    <!doctype>
    <html>
        <head>
            <meta charset="utf-8">
            <title>Привет Форус</title>
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
            <h1>Привет Форус</h1>

            <address>
  <a  href="mailto:deny70@bk.ru"> Нажмите , чтобы поприветствовать deny70@bk.ru</a><br/>



        </body>
    <html>
`);

}).listen(3000,() =>console.log('сервер запущен'));
