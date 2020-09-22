const express = require("express");
const axios = require("axios");
const cors = require("cors");
const faker = require("faker");
// const { account, token } = require("./API_Keys/triposoKey.js") || null;
const { Story } = require("../db/stories_db.js");
const PORT = process.env.PORT || 4000;
const app = express();
require("dotenv").config;

app.use(cors());
app.use(express.static("dist"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// ***** LOCATION DATA REQUESTS *****
app.get("/info", (req, res) => {
  let category = req.query.category || "sightseeing"; // **FUTURE ENHANCEMENT** 

  var config = {
    method: "get",
    url: `https://www.triposo.com/api/20200803/poi.json?location_id=${req.query.location}&tag_labels=${category}&count=4&fields=id,name,score,intro,snippet,tag_labels,location_id,location_ids,images&order_by=-score`,
    headers: {
      "X-Triposo-Account": process.env.account || account,
      "X-Triposo-Token": process.env.token || token,
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
      res.status(500)
    });
});


// ***** STORIES REQUESTS *****
app.get("/story", (req, res) => {
  Story.find({ city: req.query.city }, (err, docs) => {
    res.json(docs);
  });
});

app.post("/story", (req, res) => {
  let userStory = req.body;
  userStory.avatar = faker.image.avatar();

  Story.create(userStory, (err, doc) => {
    if (err) {
      console.log(err)
      res.send(500)
      return;
    } 
    res.status(200).json(doc);
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on Port ${PORT}...`);
});
