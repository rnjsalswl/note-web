const fs = require('fs');
const express = require('express');
const bodyPaser = require('body-parser');
const app = express();
const port = process.env.PORT || 5001;
const multer = require('multer');

app.use(bodyPaser.json());
app.use(bodyPaser.urlencoded({ extended: true }));
app.use(express.json());

const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);
const mysql = require('mysql');
const { request } = require('http');
const { response } = require('express');
// const { default: Board } = require('../header/Board');

const connection = mysql.createConnection({
    host: conf.host,
    user: conf.user,
    password: conf.password,
    port: conf.port,
    database: conf.database
});
connection.connect();

app.get('/api/board', (req, res) => {
    connection.query(
        "select * from board",
        (err, rows, fields) => {
            res.send(rows);
        }
    )
});

app.get('/api/users', (req, res) => {
    connection.query(
        "select * from users",
        (err, rows, fields) => {
            res.send(rows);
        }
    )
});

app.get(`/api/board`,(req, res) => {
    let id = req.body.id;
    connection.query(
        `select * from board where = ${id}`,
        (err, rows, fields) =>{
            res.send(rows);
        }
    )
})
app.post('/CreateUser', function (req, res) {
    let
        email = req.body.email,
        password = req.body.password,
        gender = req.body.gender,
        name = req.body.name;

    connection.query(`insert into users (name, email, gender, password) values('${name}','${email}','${gender}','${password}')`
        , email, function (err, result) {
            if (err) {
                console.log(err);
            } else {
                res.redirect('/login');
            }
        })
})
app.post('/CreateBaord', function (req, res) {
    let
        img = req.body.img,
        title = req.body.title
    
    connection.query(`insert into board (image, title) values('${img}','${title}')`
        , title, function (err, result) {
            if (err) {
                console.log(err);
            } else {
                res.json('success')
            }
        })
})
app.post('/signin', function (req, res) {
    let
        user_name = req.body.email,
        password = req.body.password;
    const user = { email: user_name, pw: password }
    connection.query(`select * from users where email = '${user_name}' and password = '${password}'`, function (err, result) {
        if (err) {
            console.log('err:' + err);
        } else {
            if (result.length === 0) {
                res.json({ success: false, msg: '아이디/비밀번호를 확인해주세요.' })
            } else {
                res.json('success');
                
            }
        }
    })
})
app.listen(port, () => console.log(`Listening on port ${port}`));