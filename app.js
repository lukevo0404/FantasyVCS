const axios = require("axios");
const cheerio = require("cheerio");
const pretty = require("pretty");

const url = "https://gol.gg/tournament/tournament-matchlist/VCS%20Spring%202022/";

async function scrapeData() {
    try {
        
      // Fetch HTML of the page 
      const { data } = await axios.get(url);

      // Load HTML
      const $ = cheerio.load(data);

      // Select all the td
      const listItems = $(".table_list tbody tr td.text-left");

      const matchList = [];

      // loop through the td
      listItems.each((idx, el) => {

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
      console.dir(matchList);
      
    } catch (err) {
      console.error(err);
    }
  }
  
  scrapeData();