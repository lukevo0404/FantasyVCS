const axios = require("axios");
const cheerio = require("cheerio");
const pretty = require("pretty");
const fs = require('fs');

const url = "https://gol.gg/tournament/tournament-matchlist/VCS%20Spring%202022/";

async function scrapeData() {
    try {
        
      // Fetch HTML of the page 
      const { data } = await axios.get(url);

      // Load HTML
      const $ = cheerio.load(data);

      // Select all the td
      const listMatches = $(".table_list tbody tr td.text-left");
      const listInfo = $(".table_list tbody tr td.text-center");

      const matchList = [];

      // loop through the td
      listMatches.each((idx, el) => {

        // Object for each match
        const match = { teamA: "", teamB: "", link: "" };
        
        const teams = $(el).children("a").text().split(' vs ');
        match.teamA = teams[0];
        match.teamB = teams [1];

        const linkString = $(el).children("a").attr('href');
        const link = "https://gol.gg/" + linkString.substring(3, linkString.length);
        match.link = link;

        matchList.push(match);
      });

      listInfo.each((idx, el) => {
        const info = { result: "", date: "", patch: "" };

        const result = $(el).children
        .text();
        info.result = result;

        const date = $(el)
        .text();
        info.date = date;

        const patch = $(el)
        .text();
        info.patch = patch;

        matchList.push(info);
      });

      console.dir(matchList);

      fs.writeFile('matchList.json', JSON.stringify(matchList), (err) => {
        if (err) {
          console.log(error)
          return
        }
        console.log('Website has been scrapped!')
      })
    } catch (err) {
      console.error(err);
    }
  }
  
  scrapeData();