const mongoose = require('mongoose');

const stockSchema = mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    current_Market_Price: {
        type: Number,
        required: true,
    },
    market_cap: {
        type: Number,
        required: false,
    },
    stock_pe: {
        type: Number,
        required: false
    },
    Dividend_Yield: {
        type: Number,
        required: false
    },
    roe: {
        type: Number,
        required: false
    },
    previous_annum: {
        type: Number,
        required: false
    },
    debt_to_equity: {
        type: Number,
        required: false
    },
    eps: {
        type: Number,
        required: false
    },
    reserves: {
        type: Number,
        required: false
    },
    debt: {
        type: Number,
        required: false
    }
});


const StockSchema = mongoose.model('Stock', stockSchema);
module.exports = { Stock: StockSchema } 