const espress =require("express");
const dotenv= require("dotenv");
const app = express();

dotenv.config();

app.get("/", function (req,res) {
    res.send("Hello world!");
});

app.post("/",(req, res)=>{
    console.log(req);

});

app.listen(process.env.PORT)