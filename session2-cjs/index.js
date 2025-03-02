const express = require("express");
const app = express();
const PORT = 8082;

const { getCurrencies, getCurrencyBySymbol } = require("./controllers/currencies.controllers");
const {  getUsers, getUserById, searchUsers } = require("./controllers/users.controllers")

app.get("/", (req, res) => {
    res.send(`<h1 style="color:red">Currency Database</h1>`);
})

app.get("/currencies", getCurrencies);
app.get("/currencies/:currencyId", getCurrencyBySymbol);
app.get("/users",getUsers);
app.get("/users/search",searchUsers);
app.get("/users/:uuid",getUserById);


app.listen(PORT,() => {
    console.log(`Server running on port: ${PORT}`);
});