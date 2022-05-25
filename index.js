import express from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
dotenv.config(); // 0. Schreibe eine .env datei und speichere dadrin ein Secret. 

const app = express();

app.use(express.json());

const users = [];

const posts = [
    {
        username: "niels",
        title: "Post 1"
    },
    {
        username: "max",
        title: "Post 2"
    }
]

const authenticateUser = (req, res, next) => {
 /*
    5. Hier soll geguckt werden ob der User das richtige Passwort eingegeben hat. 
        1. Finde den User in der Datenbank
        2. Vergleiche mit bcrypt das Passworts des Users aus der Datenbank mit dem Passwort aus req. 
 */
}

const authorizeToken = (req, res, next) => {
    /* 3. Hier soll der Token authorisiert werden. Dazu musst du:
    1. Den token aus dem authorization Header holen. Tipp: Guck mal in req.headers["authorization"] 
    2. Falls kein Token da ist, einen Fehler an den Client senden.
    3. Falls ein Token da ist, mit jwt.verify den token verifizieren.
    4. falls der Token verifiziert ist soll next() mit dem richtigem req.user Objekt ausgeführt werden, und sonst ein Fehler rauskommen. 
    */
    next();
}

app.post("/login", authenticateUser, (req, res) => {
    // 1. Generiere in dieser Funktion einen neuen accessToken mit jwt.sign und returne den an den client mit res.json().
})


app.get("/posts", authorizeToken, (req, res) => {
    // 2. Hier sollen alle posts zurückgegeben werden, die den gleichen namen haben wie req.user.name.
 });

app.post("/register", async (req, res) => {
    const { name, password } = req.body;
    // 4. Hier soll mithilfe von bcrypt der username und passwort in der DB gespeichert werden. 
})

app.listen(3000, () => {
    console.log("app listening on port 3000");
})
