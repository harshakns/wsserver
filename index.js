const ws = require("ws");
const { createQuote, symbols } = require("./quotes.js");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { watchListArr } = require("./sampleData.js");
console.log(watchListArr);
const watchlists = {
  watchlists: {
    watchlist: watchListArr
  }
};
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.get("/watchlists", (req, res) => {
  res.send(JSON.stringify(watchlists)).status(200);
});

app.post("/addsymbol", (req, res) => {
  const watchlist_names = watchlists.watchlists.watchlist.map(
    element => element.watchlist_name
  );
  if (watchlist_names.includes(req.body.watchlist_name)) {
    watchlists.watchlists.watchlist = watchlists.watchlists.watchlist.reduce(
      (acc, curr) => {
        if (curr.watchlist_name === req.body.watchlist_name) {
          curr.symbols.push(req.body.symbol);
        }
        acc.push(curr);
        return acc;
      },
      []
    );
  } else {
    watchlists.watchlists.watchlist.push({
      symbols: [req.body.symbol],
      watchlist_name: req.body.watchlist_name
    });
  }
  //console.log(watchlists.watchlists.watchlist);
  res.send({ result: "success" }).status(200);
});
app.post("/deletesymbol", (req, res) => {
  console.log(req.body);
  watchlists.watchlists.watchlist = watchlists.watchlists.watchlist.reduce(
    (acc, curr) => {
      if (curr.watchlist_name === req.body.watchlist_name) {
        curr.symbols = curr.symbols.filter(
          symbol => !req.body.symbol.includes(symbol)
        );
      }
      acc.push(curr);
      return acc;
    },
    []
  );
  console.log(watchlists.watchlists.watchlist);
  res.send({ result: "success" }).status(200);
});
app.post("/deletewatchlist", (req, res) => {
  console.log(watchlists.watchlists.watchlist);
  watchlists.watchlists.watchlist = watchlists.watchlists.watchlist.filter(
    watchlist => {
      watchlist.watchlist_name !== req.body.watchlist_name;
    }
  );
  console.log(watchlists.watchlists.watchlist);
  res.send({ result: "success" }).status(200);
});

app.listen(3001, () => {
  console.log("i am running on port 3001");
});

const server = new ws.Server({ port: 8080 });
server.on("connection", ws => {
  setInterval(() => {
    symbols.forEach(symbol => {
      ws.send(JSON.stringify(createQuote(symbol)));
      return symbol;
    });
  }, 50);
});
