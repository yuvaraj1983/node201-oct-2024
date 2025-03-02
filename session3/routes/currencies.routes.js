const router = require("express").Router();
const { getCurrencies, getCurrencyBySymbol } = require("../controllers/currencies.controllers");

//const router = express.Router();

router.get("/", getCurrencies);
router.get("/:currencyId", getCurrencyBySymbol);

module.exports = router;