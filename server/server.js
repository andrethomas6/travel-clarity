const express = require("express");
const axios = require("axios");
const cors = require('cors');
const faker = require('faker');
require('dotenv').config

// const mongoose = require("mongoose");

const { sydney, spain } = require("./SampleData/sightseeing.js");
const sightseeing = require("./SampleData/sightseeing.js");
const { account, token } = require("./API_Keys/triposoKey.js");
const { Story } = require("../db/stories_db.js");

const PORT = process.env.PORT || 4000;
const app = express();
app.use(cors())
app.use(express.static("dist"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/info", (req, res) => {
  // console.log('Got Request', req.query);
  // res.send(["ok"])
  let category = req.query.category || "sightseeing";

  var config = {
    method: "get",
    url: `https://www.triposo.com/api/20200803/poi.json?location_id=${req.query.location}&tag_labels=${category}&count=4&fields=id,name,score,intro,snippet,tag_labels,location_id,location_ids,images&order_by=-score`,
    headers: {
      "X-Triposo-Account": account,
      "X-Triposo-Token": token,
      Cookie: "__cfduid=dd84dc074ff82a67aff2ea7b658dead2c1600208594",
    },
  };

  axios(config)
    .then(function (response) {
      let locations = response.data.results;
      for (let i = 0; i < locations.length; i++) {
        locations[i].images = locations[i].images.slice(0, 1);
      }
      res.status(200).json(locations);
    })
    .catch(function (error) {
      console.log(error);
    });
});

app.get("/story", (req, res) => {
  console.log("Get", req.query);
  Story.find(
    { city: req.query.city },
    (err, docs) => {
      console.log('find all docs', docs);
      res.json(docs);
    }
  );
});

app.post("/story", (req, res) => {
  let userStory = req.body;
  userStory.avatar = faker.image.avatar();

  Story.create(userStory, (err, doc) => {
    if (err) return console.log(err);
    console.log(doc);
    res.status(200).json(doc);
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on Port ${PORT}...`);
});
