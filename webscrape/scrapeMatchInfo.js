const axios = require("axios");
const cheerio = require("cheerio");
const { contains } = require("cheerio/lib/static");
const pretty = require("pretty");
const fs = require('fs');
const matchList = [];


let url = "https://gol.gg/tournament/tournament-matchlist/VCS%20Spring%202022/";

async function scrapeData() {
    try {
        
      // Fetch HTML of the page 
      const { data } = await axios.get(url);

      // Load HTML
      const $ = cheerio.load(data);

      // Select all the td
      
      listItems = $(".table_list tbody tr td.text-left");

      
      // loop through the td
      listItems.each((idx, el) => {      
        const match = { teamA: "", teamB: "", teamAscore:"", teamBscore:"", matchID: "" };  
        const teams = $(el).children("a").text().split(' vs ');
        match.teamA = teams[0];
        match.teamB = teams[1];

        const linkString = $(el).children("a").attr('href');
      const linkMatchIdString = linkString.split('../game/stats/').pop().split('/page-summary/')[0];
      match.matchID = linkMatchIdString;
        matchList.push(match)
      });
      
      let i=0;
      listItems = $(".table_list tbody tr td:nth-of-type(3)");
      
      listItems.each((idx, el) => {        
        
        const teamsScore = $(el).text().split(' - ');

        matchList[i].teamAscore = teamsScore[0];
        matchList[i].teamBscore = teamsScore[1];
        i++;
      });

      console.log(matchList);
      // var jsonContent = JSON.stringify(matchList);

    //   fs.writeFile("output.json", jsonContent, 'utf8', function (err) {
    //     if (err) {
    //         console.log("An error occured while 0 JSON Object to File.");
    //         return console.log(err);
    //     }
     
    //     console.log("JSON file has been saved.");
    // });
    } catch (err) {
      console.error(err);
    }
    
  }

  module.exports = {scrapeData, matchList}