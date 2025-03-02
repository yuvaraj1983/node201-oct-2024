import currencyJson from "../currency.json" assert { type : "json"};


const getCurrencies = (req, res) => {
    //console.log(req.query);
    const { min_value } = req.query;
    if(min_value) return res.send(currencyJson.data.filter((curr) => curr.min_size === min_value));

    res.send(currencyJson);
}

const getCurrencyBySymbol = (req, res) => {
    //console.log(req.params);
    const { currencyId } = req.params;
    const reqCurrency = currencyJson.data.find(curr => curr.id === currencyId.toUpperCase());
    if(reqCurrency) return res.send(reqCurrency);
     
    res.status(404).send({message: `Currency with Symbol: '${req.params.currencyId}' could not be found.`})
    
}

export  { getCurrencies, getCurrencyBySymbol };