import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./route/web";
require("dotenv").config();
import connectDb from "./config/connectDB";

let app = express();

// config app

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app);
initWebRoutes(app);

connectDb()

const port = process.env.PORT || 3001;
app.listen(port, () => {
    //callback
    console.log("Backend nodejs is running on: " + port);
});
