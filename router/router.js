const { Router } = require("express");
const { Stock } = require("../model/stock.model");

const router = Router();

router.post("/add", (req,res)=>{
    const data = req.body.data;

    console.log(data.length);
    data.forEach((element) => {
        myFunn(element);
    });

    async function myFunn(element){
        const stock = new Stock();

        stock.name = element.Name;
        stock.current_Market_Price = element.Current_Market_Price;
        stock.market_cap = element.Market_Cap;
        stock.Dividend_Yield = element.Dividend_Yield;
        stock.roe = element.ROCE;
        stock.previous_annum = element.ROE_Previous_Annum;
        stock.debt_to_equity = element.Debt_to_Equity;
        stock.eps = element.EPS;
        stock.reserves = element.Reserves;
        stock.debt = element.Debt;

        const result = await stock.save();
        return
    }
   

     console.log("here.........");
     return res.status(200).json({message: "success"});
})



router.post("/details", async(req,res)=>{
    const stockExist = await Stock.findOne({ name: req.body.name });
    console.log(stockExist);
    if(stockExist){
        console.log("Here............");
        return res.status(200).json( {
            status: "success",
            stockExist
        })
    }
});

module.exports = router;

