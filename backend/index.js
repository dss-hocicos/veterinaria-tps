// import express
import express from "express";
// import cors
import bodyParser from 'body-parser';
 
import cors from "cors";
 
// import routes
import Router from "./routes/routes.js";

// init express
const app = express();
  
// use express json
app.use(express.json());

// use cors
app.use(cors({
    origin: 'http://localhost:8080'
}));
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
  
// use router
app.use(Router);

app.listen(3000, () => console.log('Server running at http://localhost:3000'));