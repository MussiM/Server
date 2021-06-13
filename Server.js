const express = require('express');
const app = express();
app.use(express.static('build'));
app.get('/getTime', (req, res) => {
    const date_ob = new Date();
    const hours = date_ob.getHours() < 10 ? `0${date_ob.getHours()}` : date_ob.getHours();
    const minutes = date_ob.getMinutes() < 10 ? `0${date_ob.getMinutes()}` : date_ob.getMinutes();
    const seconds = date_ob.getSeconds() < 10 ? `0${date_ob.getSeconds()}` : date_ob.getSeconds();
    const time = `${hours}:${minutes}:${seconds}`;
    res.send(time);
});
app.listen(5000, ()=>{console.log("listening on port 5000")});