const express = require("express");
const app = express();
const PORT = 8082;
require("dotenv").config();
const connectDB = require("./db/config");
connectDB();

const currenciesRouter = require("./routes/currencies.routes");
const userRouter = require("./routes/users.routes");
const blogRouter = require("./routes/blogs.routes");
const verifyAuth = require("./middleware/verifyAuth");

app.use(express.json());

app.get("/", (req, res) => {
    res.send(`<h1 style="color:red">Currency Database</h1>`);
})

// app.get("/currencies", getCurrencies);
// app.get("/currencies/:currencyId", getCurrencyBySymbol);
app.use("/currencies", currenciesRouter);
//app.use(verifyAuth);
app.use("/users", userRouter);
app.use("/blogs", blogRouter);

app.listen(PORT,() => {
    console.log(`Server running on port: ${PORT}`);
});