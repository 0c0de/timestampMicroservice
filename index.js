const express = require('express');

let app = express();

var PORT = process.env.PORT || 3000;
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
app.get('/', (Request,Response) => {
    Response.send("This is root");
});

app.get('/:date', (Request,Response) => {
    let dates = Request.params.date;
    let jsonDates = {

    };

    if(dates.match(/[A-Za-z]/)){
        jsonDates.unix = new Date(dates).getTime() / 1000;
        jsonDates.natural = months[new Date(dates).getMonth()] + " " + new Date(dates).getDate() + ", " + new Date(dates).getFullYear();
    }else{
        jsonDates.unix = dates;
        jsonDates.natural = months[new Date(dates * 1000).getMonth()] + " " + new Date(dates * 1000).getDate() + ", " + new Date(dates * 1000).getFullYear()
    }

    if(new Date(jsonDates.unix * 1000).toString() === "Invalid Date" || jsonDates.natural.toString() === "Invalid Date"){
        jsonDates.unix = null;
        jsonDates.natural = null;
    }
    Response.send(jsonDates);
});

app.listen(PORT, (callback) =>{
    console.log("App is listening on port: ",PORT);
});