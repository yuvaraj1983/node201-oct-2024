const express = require("express");
const app = express();
const PORT = 8082;
const currencyJson = require("./currency.json");

app.get("/", (req, res) => {
    res.send(`<h1 style="color:red">Currency Database</h1>`);
})

app.get("/currencies", (req, res) => {
    //console.log(req.query);
    const { min_value } = req.query;
    if(min_value) return res.send(currencyJson.data.filter((curr) => curr.min_size === min_value));

    res.send(currencyJson);
})

app.get("/currencies/:currencyId", (req, res) => {
    //console.log(req.params);
    const { currencyId } = req.params;
    const reqCurrency = currencyJson.data.find(curr => curr.id === currencyId.toUpperCase());
    if(reqCurrency) return res.send(reqCurrency);
     
    res.status(404).send({message: `Currency with Symbol: '${req.params.currencyId}' could not be found.`})
    
})

app.listen(PORT,() => {
    console.log(`Server running on port: ${PORT}`);
});