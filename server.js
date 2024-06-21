import express from "express";
import axios from "axios";


const app = express();
const port =3000;

app.use(express.static("public"));

app.listen(port, ()=>{
    console.log(`listening to port ${port}`);
} )

app.get(`/`, (req, res) => {
    res.render("index.ejs",);
})

app.get(`/weather`, async (req, res) => {

    const place = req.query.place;
    const apiKey = "e95ac2f9d071dfbc6da268960c285deb";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${place}&units=imperial&appid=${apiKey}`
    let weather;
    let error = ``;

    try {
        const responce = await axios.get(apiUrl);
        weather = responce.data;
        console.log();
        res.render(`index.ejs`, { weather, error});
    } catch (error) {
        weather = null;
        error = `unexpected error`
    }



})