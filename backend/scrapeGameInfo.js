const axios = require("axios");
const cheerio = require("cheerio");
const { find } = require("domutils");
const pretty = require("pretty");
let url = "https://gol.gg/tournament/tournament-matchlist/VCS%20Spring%202022/";

scrapeMatchData();
getGameDetails("37056", "37056","teamA");

const gameList = [];
const matchList = [];
const matchIDList = [];

//
async function scrapeMatchData() {
  try {
      
    // Fetch HTML of the page 
    const { data } = await axios.get(url);

    // Load HTML
    const $ = cheerio.load(data);

    // Select all the td
    
    listItems = $(".table_list tbody tr td.text-left");

    
    // loop through the td
    listItems.each((idx, el) => {      
      const match = { teamA: "", teamB: "", teamAscore:"", teamBscore:"", matchID: "", winner:"", patch:"", date: "" };  
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

      if (teamsScore[0] > teamsScore[1]){
        matchList[i].winner = "teamA";
      }
      if (teamsScore[1] > teamsScore[0]){
        matchList[i].winner = "teamB";
      }
      i++;
    });
    

    i=0;
    listItems = $(".table_list tbody tr td:nth-of-type(6)");
    listItems.each((idx, el) => {        
      
      const patchString = $(el).text();

      matchList[i].patch = patchString;
      i++;
    });

    i=0;
    listItems = $(".table_list tbody tr td:nth-of-type(7)");
    listItems.each((idx, el) => {        
      
      const dateString = $(el).text();

      matchList[i].date = dateString;
      i++;
    });

    getMatchIDs();
    console.log(matchList)
    
  } catch (err) {
    console.error(err);
  }
  
}

//scrape player info
function getMatchIDs() {
  for (let i = 0; i < matchList.length; i++){
    matchIDList.push(matchList[i].matchID)
  }
}

//GET A GAME DETAILS
async function getGameDetails(matchID, gameID, winner) {
  try {
    url = "https://gol.gg/game/stats/" + matchID + "/page-fullstats/";
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    //Getting all cell data from table
    const listItems = $(".completestats tr td");

    const tableDataList = [];
    let currentRow = 0;
    let currentCell = 0;
    tableDataList.push({ title: "", cell: [] })
    listItems.each((idx, el) => {
      const td = $(el).text()
      if (currentCell > 10) {
        currentCell = 0;
        currentRow++;
        tableDataList.push({ title: "", cell: [] })
      } if (currentCell == 0) {
        tableDataList[currentRow]["title"] = td;
      } else {
        tableDataList[currentRow]["cell"].push(td);
      }
      currentCell++;
    });


    //Adding each player stats
    function findStats(statsName) {
      let obj = tableDataList.find(o => o.title === statsName);
      return obj
    }

    function assignStats(player, i, win) {
      player.name = playerNameList[i]
      player.role = findStats('Role').cell[i];
      player.kill = findStats('Kills').cell[i];
      player.dealth = findStats('Deaths').cell[i];
      player.KDA = findStats('KDA').cell[i];
      player.visionScore = findStats('Vision Score').cell[i];
      player.soloKill = findStats('Solo kills').cell[i];
      player.doubleKill = findStats('Double kills').cell[i];
      player.tripleKill = findStats('Triple kills').cell[i];
      player.quadraKill = findStats('Quadra kills').cell[i];
      player.pentaKill = findStats('Penta kills').cell[i];
      player.objectiveStole = findStats('Objectives Stolen').cell[i];
      player.win = win  ? true : false;
    }

    const playerNameList = tableDataList[0]["cell"];

    const game = {
      matchID: matchID,
      gameID: gameID,

      player1: {
        name: "", role: "", kill: 0, dealth: 0, KDA: 0, visionScore: 0, soloKill: 0,
        doubleKill: 0, tripleKill: 0, quadraKill: 0, pentaKill: 0,
        objectiveStole: 0, win: false
      },

      player2: {
        name: "", role: "", kill: 0, dealth: 0, KDA: 0, visionScore: 0, soloKill: 0,
        doubleKill: 0, tripleKill: 0, quadraKill: 0, pentaKill: 0,
        objectiveStole: 0, win: false
      },

      player3: {
        name: "", role: "", kill: 0, dealth: 0, KDA: 0, visionScore: 0, soloKill: 0,
        doubleKill: 0, tripleKill: 0, quadraKill: 0, pentaKill: 0,
        objectiveStole: 0, win: false
      },

      player4: {
        name: "", role: "", kill: 0, dealth: 0, KDA: 0, visionScore: 0, soloKill: 0,
        doubleKill: 0, tripleKill: 0, quadraKill: 0, pentaKill: 0,
        objectiveStole: 0, win: false
      },

      player5: {
        name: "", role: "", kill: 0, dealth: 0, KDA: 0, visionScore: 0, soloKill: 0,
        doubleKill: 0, tripleKill: 0, quadraKill: 0, pentaKill: 0,
        objectiveStole: 0, win: false
      },

      player6: {
        name: "", role: "", kill: 0, dealth: 0, KDA: 0, visionScore: 0, soloKill: 0,
        doubleKill: 0, tripleKill: 0, quadraKill: 0, pentaKill: 0,
        objectiveStole: 0, win: false
      },

      player7: {
        name: "", role: "", kill: 0, dealth: 0, KDA: 0, visionScore: 0, soloKill: 0,
        doubleKill: 0, tripleKill: 0, quadraKill: 0, pentaKill: 0,
        objectiveStole: 0, win: false
      },

      player8: {
        name: "", role: "", kill: 0, dealth: 0, KDA: 0, visionScore: 0, soloKill: 0,
        doubleKill: 0, tripleKill: 0, quadraKill: 0, pentaKill: 0,
        objectiveStole: 0, win: false
      },

      player9: {
        name: "", role: "", kill: 0, dealth: 0, KDA: 0, visionScore: 0, soloKill: 0,
        doubleKill: 0, tripleKill: 0, quadraKill: 0, pentaKill: 0,
        objectiveStole: 0, win: false
      },

      player10: {
        name: "", role: "", kill: 0, dealth: 0, KDA: 0, visionScore: 0, soloKill: 0,
        doubleKill: 0, tripleKill: 0, quadraKill: 0, pentaKill: 0,
        objectiveStole: 0, win: false
      },
    }


    for (let i = 0; i < playerNameList.length; i++) {
      if (i == 0) {
        assignStats(game.player1, i, winner == "teamA" ? true : false);
      }
      if (i == 1) {
        assignStats(game.player2, i, winner == "teamA" ? true : false);
      }
      if (i == 2) {
        assignStats(game.player3, i, winner == "teamA" ? true : false);
      }
      if (i == 3) {
        assignStats(game.player4, i, winner == "teamA" ? true : false);
      }
      if (i == 4) {
        assignStats(game.player5, i, winner == "teamA" ? true : false);
      }
      if (i == 5) {
        assignStats(game.player6, i, winner == "teamB" ? true : false);
      }
      if (i == 6) {
        assignStats(game.player7, i, winner == "teamB" ? true : false);
      }
      if (i == 7) {
        assignStats(game.player8, i, winner == "teamB" ? true : false);
      }
      if (i == 8) {
        assignStats(game.player9, i, winner == "teamB" ? true : false);
      }
      if (i == 9) {
        assignStats(game.player10, i, winner == "teamB" ? true : false);
      }
    }
    gameList.push(game)
    console.log(gameList)
  
  } catch (err) {
    console.error(err);
  }
}

