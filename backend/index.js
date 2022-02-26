const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

const bcrypt = require('bcrypt');
const saltRounds = 10;

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'db_superhero'
});

app.post('/add', (req, res) => {
    const hero_id = req.body.id;
    const name = req.body.name;
    const fullname = req.body.fullname;
    const alter_ego = req.body.alter_ego;
    const birth_place = req.body.birth_place;
    const publisher = req.body.publisher;
    const combat = req.body.combat;
    const durability = req.body.durability;
    const intelligence = req.body.intelligence;
    const power = req.body.power;
    const speed = req.body.speed;
    const strength = req.body.strength;
    const gender = req.body.gender;
    const hair_color = req.body.hair_color;
    const eye_color = req.body.eye_color;
    const race = req.body.race;
    const height = req.body.height;
    const weight = req.body.weight;
    const work_location = req.body.work_location;
    const occupation = req.body.occupation;
    const connections = req.body.connections;
    const relatives = req.body.relatives;
    const images = req.body.images;

    db.query('INSERT INTO favorite_hero (hero_id, name, fullname, alter_ego, birth_place, publisher, combat, durability, intelligence, power, speed, strength, gender, hair_color, eye_color, race, height, weight, work_location, occupation, connections, relatives, images) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [hero_id, name, fullname, alter_ego, birth_place, publisher, combat, durability, intelligence, power, speed, strength, gender, hair_color, eye_color, race, height, weight, work_location, occupation, connections, relatives, images], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send('Hero inserted');
        }
    });
});

app.get('/favorite', (req, res) => {
    db.query('SELECT * FROM favorite_hero', (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.get('/favorite/:hero_id', (req, res) => {
    const hero_id = req.params.hero_id;

    db.query(`SELECT * FROM favorite_hero WHERE hero_id = ${hero_id}`, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.delete('/favorite/:hero_id', (req, res) => {
    const hero_id = req.params.hero_id;

    db.query('DELETE FROM favorite_hero WHERE hero_id = ?', hero_id, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
});

//REGISTER
app.post('/register', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    db.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, password],
    (err, result) => {
        console.log(err);
    })

});

//LOGIN
app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    db.query('SELECT * FROM users WHERE username = ? AND password = ?', [username, password],
        (err, result) => {
            if (err) {
                res.send({ err: err })
            }

            if (result) {
                res.send(result);
            } else {
                res.send({ message: 'Wrong username/password combination' });
            }

        })
})

app.listen(3001, () => {
    console.log('Server is running at port 3001');
});