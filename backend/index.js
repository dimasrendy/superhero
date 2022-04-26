const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const jwt = require('jsonwebtoken');

app.use(express.json());
app.use(cors({
  origin: ['http://localhost:3000'],
  methods: ['GET', 'POST', 'DELETE'],
  credentials: true
}));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
  key: 'userId',
  secret: 'test',
  resave: false,
  saveUninitialized: false,
  cookie: {
    expires: 3600,
  }
}))

const db = mysql.createConnection({
  user: 'root',
  host: 'localhost',
  password: '',
  database: 'db_superhero'
});

const verifyJWT = (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) {
    res.json({ auth: false });
  } else {
    jwt.verify(token, 'jwtSecret', (err, decoded) => {
      if (err) {
        res.json({ auth: false, message: 'You fail to authenticate' });
      } else {
        req.userId = decoded.id;
        next();
      }
    })
  }
}

app.get('/isUserAuth', verifyJWT, (req, res) => {
  res.json({ auth: true, message: 'You are authenticated', data: { userId: req.userId } });
});

app.post('/add', verifyJWT, (req, res) => {
  const hero_id = req.body.id;
  const name = req.body.name;
  const images = req.body.images;
  const user_id = req.userId;

  db.query('INSERT INTO favorite_hero (hero_id, name, images, user_id) VALUES (?, ?, ?, ?)', [hero_id, name, images, user_id], (err, result) => {
    if (err) {
      res.json({ success: false });
    } else {
      res.json({ success: true });
    }
  });
});

app.get('/favorite', verifyJWT, (req, res) => {
  const user_id = req.userId;

  db.query(`SELECT * FROM favorite_hero WHERE user_id = ${user_id}`, (err, result) => {
    if (err) {
      res.json({ success: false });
    } else {
      res.json({ success: true, result: result });
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
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );

});

app.get('/login', (req, res) => {
  if (req.session.user) {
    res.send({ loggedIn: true, user: req.session.user });
  } else {
    res.send({ loggedIn: false });
  }
})

//LOGIN
app.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  db.query('SELECT * FROM users WHERE username = ? AND password = ?', [username, password],
    (err, result) => {

      if (err) {
        res.send({ err: err })
      }

      if (result.length > 0) {
        const id = result[0].id;
        const token = jwt.sign({ id }, 'jwtSecret', {
          expiresIn: 3000,
        });

        req.session.user = result;
        res.json({ auth: true, token: token, result: result });
      } else {
        res.send({ auth: false, message: 'Wrong username/password combination' });
      }
    });
});

app.listen(3001, () => {
  console.log('Server is running at port 3001');
});