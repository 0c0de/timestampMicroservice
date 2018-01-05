const express = require('express');

let app = express();

var PORT = process.env.PORT || 3000;

app.get('/', (Request,Response) => {
    Response.send("Hello World");
});

app.listen(PORT, (callback) =>{
    console.log("App is listening on port: ",PORT,callback);
});