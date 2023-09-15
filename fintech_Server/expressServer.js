const express = require("express");
const dotenv = require("dotenv");
const mysql = require("mysql2");
const app = express();

dotenv.config();
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_ACCOUNT,
  password: process.env.DB_PASSWORD,
  database: "fintech",
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", function (req,res) {
    res.send("Hello world!");
});

app.post("/",(req, res)=>{
    console.log(req);
    res.send("Hello");
});

app.post("/login",(req, res)=>{
    const{ userAccount, password}=req.body;
    const sql =
    "SELECT user_id, user_account, user_password FROM fintech.user WHERE user_account = ?";
    Connection.query(sql,[userAccount],(err, result)=>{
        if (err) throw err;
        console.log(result);
        if(password===result[0].user_password){
            res.json("로그인 성공");
        }
    });
});

app.listen(process.env.PORT)