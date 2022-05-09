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

  const game = {
    matchID: "",
    gameID: "",

    player1AName: "",
    player1AStatistics: {
      role: "", kill: 0, dealth: 0, KDA: 0, visionScore: 0, soloKill: 0,
      doubleKill: 0, tripleKill: 0, quadraKill: 0, pentaKill: 0,
      objectiveStole: 0, win: false, lose: false,
    },
    player2AName: "",
    player2AStatistics: {
      role: "", kill: 0, dealth: 0, KDA: 0, visionScore: 0, soloKill: 0,
      doubleKill: 0, tripleKill: 0, quadraKill: 0, pentaKill: 0,
      objectiveStole: 0, win: false, lose: false,
    },
    player3AName: "",
    player3AStatistics: {
      role: "", kill: 0, dealth: 0, KDA: 0, visionScore: 0, soloKill: 0,
      doubleKill: 0, tripleKill: 0, quadraKill: 0, pentaKill: 0,
      objectiveStole: 0, win: false, lose: false,
    },
    player4AName: "",
    player4AStatistics: {
      role: "", kill: 0, dealth: 0, KDA: 0, visionScore: 0, soloKill: 0,
      doubleKill: 0, tripleKill: 0, quadraKill: 0, pentaKill: 0,
      objectiveStole: 0, win: false, lose: false,
    },
    player5AName: "",
    player5AStatistics: {
      role: "", kill: 0, dealth: 0, KDA: 0, visionScore: 0, soloKill: 0,
      doubleKill: 0, tripleKill: 0, quadraKill: 0, pentaKill: 0,
      objectiveStole: 0, win: false, lose: false,
    },

    player1BName: "",
    player1BStatistics: {
      role: "", kill: 0, dealth: 0, KDA: 0, visionScore: 0, soloKill: 0,
      doubleKill: 0, tripleKill: 0, quadraKill: 0, pentaKill: 0,
      objectiveStole: 0, win: false, lose: false,
    },
    player2BName: "",
    player2BStatistics: {
      role: "", kill: 0, dealth: 0, KDA: 0, visionScore: 0, soloKill: 0,
      doubleKill: 0, tripleKill: 0, quadraKill: 0, pentaKill: 0,
      objectiveStole: 0, win: false, lose: false,
    },
    player3BName: "",
    player3BStatistics: {
      role: "", kill: 0, dealth: 0, KDA: 0, visionScore: 0, soloKill: 0,
      doubleKill: 0, tripleKill: 0, quadraKill: 0, pentaKill: 0,
      objectiveStole: 0, win: false, lose: false,
    },
    player4BName: "",
    player4BStatistics: {
      role: "", kill: 0, dealth: 0, KDA: 0, visionScore: 0, soloKill: 0,
      doubleKill: 0, tripleKill: 0, quadraKill: 0, pentaKill: 0,
      objectiveStole: 0, win: false, lose: false,
    },
    player5BName: "",
    player5BStatistics: {
      role: "", kill: 0, dealth: 0, KDA: 0, visionScore: 0, soloKill: 0,
      doubleKill: 0, tripleKill: 0, quadraKill: 0, pentaKill: 0,
      objectiveStole: 0, win: false, lose: false,
    },
  };