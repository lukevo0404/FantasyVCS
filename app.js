const axios = require("axios");
const cheerio = require("cheerio");
const pretty = require("pretty");

const url = "https://gol.gg/tournament/tournament-matchlist/VCS%20Spring%202022/";

async function scrapeData() {
    try {
        
      // Fetch HTML of the page we want to scrape
      const { data } = await axios.get(url);
      // Load HTML we fetched in the previous line
      const $ = cheerio.load(data);
      // Select all the list items in plainlist class
      const listItems = $(".table_list tbody tr td.text-left");
      console.log(listItems.html())
      // Stores data for all countries
      const matchList = [];
      // Use .each method to loop through the li we selected
      listItems.each((idx, el) => {
        // Object holding data for each country/jurisdiction
        const match = { teamA: "", teamB: "", link: "" };
        // Select the text content of a and span elements
        // Store the textcontent in the above object
        const teams = $(el).children("a").text().split(' vs ');
        
        match.teamA = teams[0];
        match.teamB = teams [1];
        const linkString = $(el).children("a").attr('href');
        const link = linkString.substring(linkString.indexOf("../"), linkString.length)
        match.link = link;
        // Populate countries array with country data
        matchList.push(match);
      });
      // Logs countries array to the console
      console.dir(matchList);
      // Write countries array in countries.json file
      
    } catch (err) {
      console.error(err);
    }
  }
  // Invoke the above function
  scrapeData();