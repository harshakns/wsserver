const watchListArr = [
  {
    symbols: ["SPY", "QQQ", "VXX", "IWM"],
    watchlist_name: "Favorites"
  },
  {
    symbols: ["BYND", "AMZN", "AMD"],
    watchlist_name: "Today"
  },
  {
    symbols: ["ACN", "BYND", "AMZN", "AMD"],
    watchlist_name: "Yesterday"
  },
  {
    symbols: ["CAT", "COST", "CVS", "CVX", "CL"],
    watchlist_name: "Volatile"
  },
  {
    symbols: ["DD", "DHR", "DOW", "DUK", "DIS"],
    watchlist_name: "Trending"
  },
  { symbols: ["EXC", "FB", "FDX", "GD", "GM"], watchlist_name: "Events" },
  {
    symbols: ["IBM", "INTC", "JNJ", "JPM", "KHC"],
    watchlist_name: "Results_day"
  },
  {
    symbols: ["MDLZ", "MDT", "MO", "MSFT", "NFLX"],
    watchlist_name: "Suggestions"
  }
];

const tradeIdeas = [
  {
    symbol: ["AMZN"],
    isLong: true,

    strategies: ["S1", "S3", "S5"]
  },
  {
    symbol: ["NVDA"],
    isLong: true,
    isShort: false,
    strategies: ["S1"]
  },
  {
    symbol: ["BA"],
    isLong: true,
    isShort: false,
    strategies: ["S4"]
  },
  {
    symbol: ["GOOG"],
    isLong: true,
    isShort: false,
    strategies: ["S1", "S5"]
  },
  {
    symbol: ["TSLA"],
    isLong: true,
    isShort: false,
    strategies: ["S1", "S5"]
  },
  {
    symbol: ["AAPL"],
    isLong: true,
    isShort: false,
    strategies: ["S2", "S4"]
  },
  {
    symbol: ["AGN"],
    isLong: true,
    isShort: false,
    strategies: ["S3", "S1"]
  },
  {
    symbol: ["AXP"],
    isLong: true,
    isShort: false,
    strategies: ["S1", "S2"]
  },
  {
    symbol: ["BIIB"],
    isLong: true,
    isShort: false,
    strategies: ["S3", "S4"]
  },
  {
    symbol: ["BMY"],
    isLong: true,
    isShort: false,
    strategies: ["S1", "S5"]
  },
  {
    symbol: ["CAT"],
    isLong: true,
    isShort: false,
    strategies: ["S4", "S5"]
  },
  {
    symbol: ["COF"],
    isLong: true,
    isShort: false,
    strategies: ["S1", "S5", "S6"]
  },
  {
    symbol: ["DOW"],
    isLong: true,
    isShort: false,
    strategies: ["S1", "S5"]
  },
  { symbol: ["ADL"], isLong: true, isShort: false, strategies: ["S1", "S5"] },
  { symbol: ["ANTO"], isLong: true, isShort: false, strategies: ["S1", "S5"] },
  { symbol: ["AHT"], isLong: true, isShort: false, strategies: ["S1", "S5"] },
  { symbol: ["ABF"], isLong: true, isShort: false, strategies: ["S1", "S5"] },
  { symbol: ["AZN"], isLong: true, isShort: false, strategies: ["S1", "S5"] },
  { symbol: ["AVV"], isLong: true, isShort: false, strategies: ["S1", "S5"] },
  { symbol: ["BARC"], isLong: true, isShort: false, strategies: ["S1", "S5"] },
  { symbol: ["BDEV"], isLong: true, isShort: false, strategies: ["S1", "S5"] },
  { symbol: ["BKG"], isLong: true, isShort: false, strategies: ["S1", "S5"] },
  { symbol: ["BHP"], isLong: true, isShort: false, strategies: ["S1", "S5"] },
  { symbol: ["BATS"], isLong: true, isShort: false, strategies: ["S1", "S5"] },
  { symbol: ["BLND"], isLong: true, isShort: false, strategies: ["S1", "S5"] },
  { symbol: ["BNZL"], isLong: true, isShort: false, strategies: ["S1", "S5"] },
  { symbol: ["BRBY"], isLong: true, isShort: false, strategies: ["S1", "S5"] },
  { symbol: ["CCL"], isLong: true, isShort: false, strategies: ["S1", "S5"] },
  { symbol: ["CNA"], isLong: true, isShort: false, strategies: ["S1", "S5"] },
  { symbol: ["CCH"], isLong: true, isShort: false, strategies: ["S1", "S5"] },
  { symbol: ["CPG"], isLong: true, isShort: false, strategies: ["S1", "S5"] },
  { symbol: ["CRDA"], isLong: true, isShort: false, strategies: ["S1", "S5"] },
  { symbol: ["DCC"], isLong: true, isShort: false, strategies: ["S1", "S5"] },
  { symbol: ["DGE"], isLong: true, isShort: false, strategies: ["S1", "S5"] }
];

const accountInformation = {
  account: [
    {
      balances: {
        option_short_value: 0,
        total_equity: 2302.47,
        account_number: "TBI0000000",
        account_type: "margin",
        close_pl: 0,
        current_requirement: 0,
        equity: 0,
        long_market_value: 0,
        market_value: 0,
        open_pl: 0,
        option_long_value: 0,
        option_requirement: 0,
        pending_orders_count: 0,
        short_market_value: 0,
        stock_long_value: 0,
        total_cash: 2302.47,
        uncleared_funds: 0,
        pending_cash: 0,
        margin: {
          fed_call: 0,
          maintenance_call: 0,
          option_buying_power: 2302.47,
          stock_buying_power: 4604.94,
          stock_short_value: 0,
          sweep: 0
        }
      },
      account_number: "TBI0000000"
    }
  ]
};
const tradePlan = {
  addTradePlan: {
    status: "ARMED",
    symbol: "UBER",
    isLong: true,
    isShort: false,
    strategy: "S3",
    tradeType: "Buy",
    instrument: "Options",
    optionChoices: [
      {
        underlying: "UBER",
        symbol: "UBER 190920C00045000",
        expiration: "Sep 20, 2019",
        strike: 45.0,
        putcall: "Call"
      },
      {
        underlying: "UBER",
        symbol: "UBER 190920C00046000",
        expiration: "Sep 20, 2019",
        strike: 46.0,
        putcall: "Call"
      }
    ],
    quantity: 20,
    triggers: [
      {
        price: 45.32,
        type: "A"
      },
      {
        price: 46.0,
        type: "B"
      }
    ],
    exits: [
      {
        exitType: "STOP",
        price: 43.99,
        priceType: "U",
        quantity: "all",
        armed: true
      },
      {
        exitType: "TARGET",
        price: 45.8,
        priceType: "U",
        quantity: "75%",
        armed: true
      },
      {
        exitType: "TARGET",
        price: 48,
        priceType: "U",
        quantity: "all",
        armed: true
      }
    ],
    automation: [
      {
        autoType: "B/E",
        how: "FollowTargets",
        delta: 0.15
      },
      {
        autoType: "Stop",
        how: "FollowPrice",
        barSize: 5,
        offset: 0.15
      }
    ]
  }
};

const optionData = [
  {
    symbol: "VXX190517P00016000",
    description: "VXX May 17 2019 $16.00 Put",
    exch: "Z",
    type: "option",
    last: null,
    change: null,
    volume: 0,
    open: null,
    high: null,
    low: null,
    close: null,
    bid: 0.0,
    ask: 0.01,
    underlying: "VXX",
    strike: 16.0,
    change_percentage: null,
    average_volume: 0,
    last_volume: 0,
    trade_date: 0,
    prevclose: null,
    week_52_high: 0.0,
    week_52_low: 0.0,
    bidsize: 0,
    bidexch: "I",
    bid_date: 1557167321000,
    asksize: 618,
    askexch: "Z",
    ask_date: 1557168367000,
    open_interest: 10,
    contract_size: 100,
    expiration_date: "2019-05-17",
    expiration_type: "standard",
    option_type: "put",
    root_symbol: "VXX"
  },
  {
    symbol: "VXX190517P00016000",
    description: "VXX May 17 2019 $16.00 Put",
    exch: "Z",
    type: "option",
    last: null,
    change: null,
    volume: 0,
    open: null,
    high: null,
    low: null,
    close: null,
    bid: 0.0,
    ask: 0.01,
    underlying: "VXX",
    strike: 16.0,
    change_percentage: null,
    average_volume: 0,
    last_volume: 0,
    trade_date: 0,
    prevclose: null,
    week_52_high: 0.0,
    week_52_low: 0.0,
    bidsize: 0,
    bidexch: "I",
    bid_date: 1557167321000,
    asksize: 618,
    askexch: "Z",
    ask_date: 1557168367000,
    open_interest: 10,
    contract_size: 100,
    expiration_date: "2019-05-17",
    expiration_type: "standard",
    option_type: "put",
    root_symbol: "VXX"
  },
  {
    symbol: "VXX190517P00016000",
    description: "VXX May 17 2019 $16.00 Put",
    exch: "Z",
    type: "option",
    last: null,
    change: null,
    volume: 0,
    open: null,
    high: null,
    low: null,
    close: null,
    bid: 0.0,
    ask: 0.01,
    underlying: "VXX",
    strike: 16.0,
    change_percentage: null,
    average_volume: 0,
    last_volume: 0,
    trade_date: 0,
    prevclose: null,
    week_52_high: 0.0,
    week_52_low: 0.0,
    bidsize: 0,
    bidexch: "I",
    bid_date: 1557167321000,
    asksize: 618,
    askexch: "Z",
    ask_date: 1557168367000,
    open_interest: 10,
    contract_size: 100,
    expiration_date: "2019-05-17",
    expiration_type: "standard",
    option_type: "put",
    root_symbol: "VXX"
  },
  {
    symbol: "VXX190517P00016000",
    description: "VXX May 17 2019 $16.00 Put",
    exch: "Z",
    type: "option",
    last: null,
    change: null,
    volume: 0,
    open: null,
    high: null,
    low: null,
    close: null,
    bid: 0.0,
    ask: 0.01,
    underlying: "VXX",
    strike: 16.0,
    change_percentage: null,
    average_volume: 0,
    last_volume: 0,
    trade_date: 0,
    prevclose: null,
    week_52_high: 0.0,
    week_52_low: 0.0,
    bidsize: 0,
    bidexch: "I",
    bid_date: 1557167321000,
    asksize: 618,
    askexch: "Z",
    ask_date: 1557168367000,
    open_interest: 10,
    contract_size: 100,
    expiration_date: "2019-05-17",
    expiration_type: "standard",
    option_type: "put",
    root_symbol: "VXX"
  }
];

module.exports = {
  watchListArr
};
