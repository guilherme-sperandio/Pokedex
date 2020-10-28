const cors = require('cors');
const express = require('express');
const app = express();
const axios = require('axios');



app.use(cors());
app.get('/', async (req,res) => {
    try {
        const idPoke = req.headers.authorization;
        console.log(idPoke);
        const pokeInfo =   await axios.get(`https://pokeapi.glitch.me/v1/pokemon/${idPoke}/`);
        return res.json(pokeInfo.data);
    } catch (error) {
        console.log(error);
    }
    
})

app.listen('4567');