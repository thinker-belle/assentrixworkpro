const express = require('express')
const app = express();

app.use(express.json());

const db= require("./models");

const emptypeRouter =  require('./routes/EmpType');
app.use("/emptype", emptypeRouter);

db.sequelize.sync().then(()=>{
    app.listen(3001,() =>{
        console.log("Server connected on port 3001")
    });
});


