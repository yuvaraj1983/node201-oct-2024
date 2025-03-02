import express from "express";
const app = express();
const PORT = 8082;

import { getCurrencies, getCurrencyBySymbol } from "./controllers/currencies.controllers.js";

app.get("/", (req, res) => {
    res.send(`<h1 style="color:red">Currency Database</h1>`);
})

app.get("/currencies", getCurrencies);

app.get("/currencies/:currencyId", getCurrencyBySymbol);

app.listen(PORT,() => {
    console.log(`Server running on port: ${PORT}`);
});