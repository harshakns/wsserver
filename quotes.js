const symbols = [
  "AAPL",
  "GOOG",
  "AMZN",
  "FB",
  "TSLA",
  "SPY",
  "QQQ",
  "VXX",
  "IWM",
  "BYND",
  "AMZN",
  "AMD",
  "ACN",
  "BYND",
  "AMZN",
  "AMD",
  "CAT",
  "COST",
  "CVS",
  "CVX",
  "CL",
  "DD",
  "DHR",
  "DOW",
  "DUK",
  "DIS",
  "EXC",
  "FB",
  "FDX",
  "GD",
  "GM",
  "IBM",
  "INTC",
  "JNJ",
  "JPM",
  "KHC",
  "MDLZ",
  "MDT",
  "MO",
  "MSFT",
  "NFLX"
];
const createQuote = symbol => {
  let bid = 150 + Math.random() * 2;
  let ask = bid + Math.random() * 1;
  let change = bid - 150;
  let changepercent = (change / 150) * 100;
  bid = bid.toFixed(2);
  ask = ask.toFixed(2);
  change = change.toFixed(2);
  changepercent = changepercent.toFixed(2);
  return {
    symbol,
    high: 170,
    low: 150,
    exchange: "A",
    bid,
    ask,
    change,
    changepercent
  };
};

module.exports = {
  createQuote,
  symbols
};
