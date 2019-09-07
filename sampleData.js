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
    symbol: ["SPY"],
    isLong: true,
    isShort: false,
    strategies: ["S1", "S3", "S5"]
  },
  {
    symbol: ["QQQ"],
    isLong: true,
    isShort: false,
    strategies: ["S1"]
  },
  {
    symbol: ["VXX"],
    isLong: true,
    isShort: false,
    strategies: ["S4"]
  },
  {
    symbol: ["IWM"],
    isLong: true,
    isShort: false,
    strategies: ["S1", "S5"]
  },
  {
    symbol: ["CVS"],
    isLong: true,
    isShort: false,
    strategies: ["S1", "S5"]
  },
  {
    symbol: ["CVX"],
    isLong: true,
    isShort: false,
    strategies: ["S3", "S1"]
  },
  {
    symbol: ["CL"],
    isLong: true,
    isShort: false,
    strategies: ["S1", "S2"]
  },
  {
    symbol: ["DD"],
    isLong: true,
    isShort: false,
    strategies: ["S3", "S4"]
  },
  {
    symbol: ["DHR"],
    isLong: true,
    isShort: false,
    strategies: ["S1", "S5"]
  },
  {
    symbol: ["DOW"],
    isLong: true,
    isShort: false,
    strategies: ["S4", "S5"]
  },
  {
    symbol: ["DUK"],
    isLong: true,
    isShort: false,
    strategies: ["S1", "S5", "S6"]
  },
  {
    symbol: ["DIS"],
    isLong: true,
    isShort: false,
    strategies: ["S1", "S5"]
  },
  { symbol: ["EXC"], isLong: true, isShort: false, strategies: ["S1", "S5"] },
  { symbol: ["FB"], isLong: true, isShort: false, strategies: ["S1", "S5"] },
  { symbol: ["FDX"], isLong: true, isShort: false, strategies: ["S1", "S5"] },
  { symbol: ["GD"], isLong: true, isShort: false, strategies: ["S1", "S5"] },
  { symbol: ["GM"], isLong: true, isShort: false, strategies: ["S1", "S5"] },
  { symbol: ["IBM"], isLong: true, isShort: false, strategies: ["S1", "S5"] },
  { symbol: ["INTC"], isLong: true, isShort: false, strategies: ["S1", "S5"] },
  { symbol: ["JNJ"], isLong: true, isShort: false, strategies: ["S1", "S5"] },
  { symbol: ["JPM"], isLong: true, isShort: false, strategies: ["S1", "S5"] },
  { symbol: ["KHC"], isLong: true, isShort: false, strategies: ["S1", "S5"] },
  { symbol: ["MDLZ"], isLong: true, isShort: false, strategies: ["S1", "S5"] },
  { symbol: ["MDT"], isLong: true, isShort: false, strategies: ["S1", "S5"] },
  { symbol: ["MO"], isLong: true, isShort: false, strategies: ["S1", "S5"] },
  { symbol: ["MSFT"], isLong: true, isShort: false, strategies: ["S1", "S5"] },
  { symbol: ["NFLX"], isLong: true, isShort: false, strategies: ["S1", "S5"] }
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

const orders = [
  {
    id: 228175,
    type: "limit",
    symbol: "AAPL",
    side: "buy",
    quantity: 50.0,
    status: "expired",
    duration: "pre",
    price: 22.0,
    avg_fill_price: 0.0,
    exec_quantity: 0.0,
    last_fill_price: 0.0,
    last_fill_quantity: 0.0,
    remaining_quantity: 0.0,
    create_date: "2018-06-01T12:02:29.682Z",
    transaction_date: "2018-06-01T12:30:02.385Z",
    class: "equity"
  },
  {
    id: 228749,
    type: "market",
    symbol: "SPY",
    side: "buy_to_open",
    quantity: 1.0,
    status: "expired",
    duration: "pre",
    avg_fill_price: 0.0,
    exec_quantity: 0.0,
    last_fill_price: 0.0,
    last_fill_quantity: 0.0,
    remaining_quantity: 0.0,
    create_date: "2018-06-06T20:16:17.342Z",
    transaction_date: "2018-06-06T20:16:17.357Z",
    class: "option",
    option_symbol: "SPY180720C00274000"
  },
  {
    id: 229063,
    type: "debit",
    symbol: "SPY",
    side: "buy",
    quantity: 1.0,
    status: "canceled",
    duration: "pre",
    price: 42.0,
    avg_fill_price: 0.0,
    exec_quantity: 0.0,
    last_fill_price: 0.0,
    last_fill_quantity: 0.0,
    remaining_quantity: 0.0,
    create_date: "2018-06-12T21:13:36.076Z",
    transaction_date: "2018-06-12T21:18:41.604Z",
    class: "combo",
    num_legs: 2,
    strategy: "covered call",
    leg: [
      {
        id: 229064,
        type: "debit",
        symbol: "SPY",
        side: "buy",
        quantity: 100.0,
        status: "canceled",
        duration: "pre",
        price: 42.0,
        avg_fill_price: 0.0,
        exec_quantity: 0.0,
        last_fill_price: 0.0,
        last_fill_quantity: 0.0,
        remaining_quantity: 0.0,
        create_date: "2018-06-12T21:13:36.076Z",
        transaction_date: "2018-06-12T21:18:41.587Z",
        class: "equity"
      },
      {
        id: 229065,
        type: "debit",
        symbol: "SPY",
        side: "sell_to_close",
        quantity: 1.0,
        status: "canceled",
        duration: "pre",
        price: 42.0,
        avg_fill_price: 0.0,
        exec_quantity: 0.0,
        last_fill_price: 0.0,
        last_fill_quantity: 0.0,
        remaining_quantity: 0.0,
        create_date: "2018-06-12T21:13:36.076Z",
        transaction_date: "2018-06-12T21:18:41.597Z",
        class: "option",
        option_symbol: "SPY180720C00274000"
      }
    ]
  },
  {
    id: 229123,
    type: "credit",
    symbol: "SPY",
    side: "buy",
    quantity: 1.0,
    status: "expired",
    duration: "pre",
    price: 0.8,
    avg_fill_price: 0.0,
    exec_quantity: 0.0,
    last_fill_price: 0.0,
    last_fill_quantity: 0.0,
    remaining_quantity: 0.0,
    create_date: "2018-06-13T16:54:39.812Z",
    transaction_date: "2018-06-13T20:55:00.069Z",
    class: "multileg",
    num_legs: 4,
    strategy: "condor",
    leg: [
      {
        id: 229124,
        type: "credit",
        symbol: "SPY",
        side: "buy_to_open",
        quantity: 1.0,
        status: "expired",
        duration: "pre",
        price: 0.8,
        avg_fill_price: 0.0,
        exec_quantity: 0.0,
        last_fill_price: 0.0,
        last_fill_quantity: 0.0,
        remaining_quantity: 0.0,
        create_date: "2018-06-13T16:54:39.812Z",
        transaction_date: "2018-06-13T20:55:00.069Z",
        class: "option",
        option_symbol: "SPY180720C00274000"
      },
      {
        id: 229125,
        type: "credit",
        symbol: "SPY",
        side: "sell_to_open",
        quantity: 1.0,
        status: "expired",
        duration: "pre",
        price: 0.8,
        avg_fill_price: 0.0,
        exec_quantity: 0.0,
        last_fill_price: 0.0,
        last_fill_quantity: 0.0,
        remaining_quantity: 0.0,
        create_date: "2018-06-13T16:54:39.812Z",
        transaction_date: "2018-06-13T20:55:00.069Z",
        class: "option",
        option_symbol: "SPY180720C00275000"
      },
      {
        id: 229126,
        type: "credit",
        symbol: "SPY",
        side: "sell_to_open",
        quantity: 1.0,
        status: "expired",
        duration: "pre",
        price: 0.8,
        avg_fill_price: 0.0,
        exec_quantity: 0.0,
        last_fill_price: 0.0,
        last_fill_quantity: 0.0,
        remaining_quantity: 0.0,
        create_date: "2018-06-13T16:54:39.812Z",
        transaction_date: "2018-06-13T20:55:00.069Z",
        class: "option",
        option_symbol: "SPY180720C00276000"
      },
      {
        id: 229127,
        type: "credit",
        symbol: "SPY",
        side: "buy_to_open",
        quantity: 1.0,
        status: "expired",
        duration: "pre",
        price: 0.8,
        avg_fill_price: 0.0,
        exec_quantity: 0.0,
        last_fill_price: 0.0,
        last_fill_quantity: 0.0,
        remaining_quantity: 0.0,
        create_date: "2018-06-13T16:54:39.812Z",
        transaction_date: "2018-06-13T20:55:00.069Z",
        class: "option",
        option_symbol: "SPY180720C00277000"
      }
    ]
  }
];

const positions = [
  {
    cost_basis: 207.01,
    date_acquired: "2018-08-08T14:41:11.405Z",
    id: 130089,
    quantity: 1.0,
    symbol: "AAPL"
  },
  {
    cost_basis: 1870.7,
    date_acquired: "2018-08-08T14:42:00.774Z",
    id: 130090,
    quantity: 1.0,
    symbol: "AMZN"
  },
  {
    cost_basis: 50.41,
    date_acquired: "2019-01-31T17:05:44.674Z",
    id: 133590,
    quantity: 1.0,
    symbol: "CAH"
  },
  {
    cost_basis: 173.04,
    date_acquired: "2019-03-11T16:51:51.987Z",
    id: 134134,
    quantity: 1.0,
    symbol: "FB"
  },
  {
    cost_basis: 9.87,
    date_acquired: "2019-03-11T16:50:33.156Z",
    id: 134132,
    quantity: 1.0,
    symbol: "GE"
  },
  {
    cost_basis: 1772.54,
    date_acquired: "2018-06-05T13:45:12.385Z",
    id: 129298,
    quantity: 13.0,
    symbol: "IBM"
  },
  {
    cost_basis: 338.64,
    date_acquired: "2019-03-11T16:50:55.774Z",
    id: 134133,
    quantity: 3.0,
    symbol: "MSFT"
  }
];
const trades = [
  {
    symbol: "AMZN",
    action: "BTO",
    quantity: 15,
    fillPrice: 1924.11,
    commission: 4.95,
    totalCost: 28866.6,
    executionTime: "2019-07-02T14:54:18Z"
  },
  {
    symbol: "MSFT",
    action: "BTO",
    quantity: 15,
    fillPrice: 1924.11,
    commission: 4.95,
    totalCost: 28866.6,
    executionTime: "2019-07-02T14:54:18Z"
  },
  {
    symbol: "NFLX",
    action: "BTO",
    quantity: 15,
    fillPrice: 1924.11,
    commission: 4.95,
    totalCost: 28866.6,
    executionTime: "2019-07-02T14:54:18Z"
  },
  {
    symbol: "CAT",
    action: "BTO",
    quantity: 15,
    fillPrice: 1924.11,
    commission: 4.95,
    totalCost: 28866.6,
    executionTime: "2019-07-02T14:54:18Z"
  },
  {
    symbol: "GOOG",
    action: "BTO",
    quantity: 15,
    fillPrice: 1924.11,
    commission: 4.95,
    totalCost: 28866.6,
    executionTime: "2019-07-02T14:54:18Z"
  },
  {
    symbol: "TSLA",
    action: "BTO",
    quantity: 15,
    fillPrice: 1924.11,
    commission: 4.95,
    totalCost: 28866.6,
    executionTime: "2019-07-02T14:54:18Z"
  },
  {
    symbol: "AMD",
    action: "BTO",
    quantity: 15,
    fillPrice: 1924.11,
    commission: 4.95,
    totalCost: 28866.6,
    executionTime: "2019-07-02T14:54:18Z"
  },
  {
    symbol: "DOW",
    action: "BTO",
    quantity: 15,
    fillPrice: 1924.11,
    commission: 4.95,
    totalCost: 28866.6,
    executionTime: "2019-07-02T14:54:18Z"
  },
  {
    symbol: "GM",
    action: "BTO",
    quantity: 15,
    fillPrice: 1924.11,
    commission: 4.95,
    totalCost: 28866.6,
    executionTime: "2019-07-02T14:54:18Z"
  },
  {
    symbol: "JPM",
    action: "BTO",
    quantity: 15,
    fillPrice: 1924.11,
    commission: 4.95,
    totalCost: 28866.6,
    executionTime: "2019-07-02T14:54:18Z"
  }
];
module.exports = {
  watchListArr,
  tradeIdeas,
  orders,
  positions,
  trades
};
