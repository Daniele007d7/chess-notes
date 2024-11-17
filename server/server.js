import express from "express";
import mysql from "mysql2/promise";
import session from "express-session";

const app = express();

// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  session({
    secret: "chiaveSegreta",
    resave: false, // sessione non si salva se non c'è nessuna modifica
    saveUninitialized: false, // sessione si salva solo se contiene dati
  })
);

// connecting to the db
const connection = await mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "chess_tracker",
  password: "*",
});

const giocatori = ["carslen", "nepo", "hikaru"];

// /api route
app.get("/api", (req, res) => {
  console.log(req.session.authorized);
  res.json(giocatori);
});

app.post("/api/signup", async (req, res) => {
  try {
    res.json(req.body);

    const [results] = await connection.query(
      "INSERT INTO user (name, password) VALUES(? , ?)",
      [req.body.username, req.body.password]
    );
  } catch (err) {
    console.log(err);
  }
});

app.post("/api/login", async (req, res) => {
  try {
    const [results] = await connection.query(
      "SELECT * from user where name = ? AND password = ?",
      [req.body.username, req.body.password]
    );
    if (results.length === 1) {
      req.session.authorized = true;
      res.json(req.session.authorized);
    } else {
      req.session.authorized = false;
      res.json(req.session.authorized);
    }
  } catch (err) {
    console.log(err);
  }
});

app.get("/api/auth", (req, res) => {
  if (req.session.authorized) {
    res.json(true);
  } else {
    res.json(false);
  }
});

app.post("/api/dayly submition", (req, res) => {
  try {
  } catch (err) {}
});

// app listening
app.listen(3000, () => console.log("app listening on port 3000"));
