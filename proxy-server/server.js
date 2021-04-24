const express = require("express");
const fetch = require("node-fetch");

const app = express();

// middlewares

// add CORS header to response from api
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

// json body parser
app.use(express.json());

// fetches data from products api and
app.get("/", async (req, res) => {
  try {
    const apiResponse = await fetch("http://139.59.244.121/my_items");

    // handle apiResponse errors
    if (apiResponse.status !== 200) {
      return res.status(500).send("External API failiure");
    }

    // get json data from response body
    const products = await apiResponse.json();

    // send back data
    res.json({ products });
  } catch (error) {
    return res.status(500).send("Internal Server Error");
  }
});

// start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));
