const mysql2 = require("mysql2"); //импорт MYSQL
const express = require("express");//импорт EXPRESS
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//открытие подключения
const pool = mysql2.createPool({
    host: "localhost",
    user: "root",
    database: "ChatBotTests",
    password: "1274812rys",
});

//Создание путей

app.get("/", function (request, response) { //Главная страница
    response.sendFile(__dirname + "/index.html");
});
app.get('/getAllItems', function (request, response) {
    pool.query('SELECT * FROM items', function (error, results, fields) {
        if (error) throw error;
        response.json(results); //возврат масива 
    });
});

const urlencodedParser = express.urlencoded({ extended: false });

app.get("/addItem", function (request, response) { //Создание Записей
    response.sendFile(__dirname + "/formADD.html");
});
app.post("/addItem", urlencodedParser, function (request, response) {
    if (!request.body) return response.sendStatus(400);
    const Name = request.body.Name;
    const description = request.body.description;// description было использовано вместо desc,так как это слово зарезервированно SQL
    pool.query("INSERT INTO items (Name, description) VALUES (?,?)", [Name, description], function (err, data) {  //Данные из формы 
        if (err) return console.log(err);
        response.redirect("/getAllItems");// перенаправление для отслеживания изменений в БД
    });

});

app.get("/deleteItem", function (request, response) { //удаление записей
    response.sendFile(__dirname + "/formDELL.html");
});
app.post("/deleteItem", function (request, response) {
    if (!request.body) return response.sendStatus(400);
    const id = request.body.id;
    pool.query("DELETE FROM items WHERE id=?", [id], function (err, data) {
        if (err) return console.log(err);
        response.redirect("/getAllItems");
    });
});


app.get("/updateItem", function (request, response) { //Обновление записей
    response.sendFile(__dirname + "/formUPDATE.html");
});
app.post("/updateItem", urlencodedParser, function (request, response) {

    if (!request.body) return response.sendStatus(400);
    const id = request.body.id;
    const Name = request.body.Name;
    const description = request.body.description;

    
    pool.query("UPDATE items SET name=?, description=? WHERE id=?", [Name, description , id], function (err, data) {
        if (err) return console.log(err);

        response.redirect("/getAllItems");
    });
});

app.listen(3000, () => console.log('сервер ожидает подключения!'));