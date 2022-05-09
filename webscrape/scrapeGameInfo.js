const axios = require("axios");
const cheerio = require("cheerio");
const pretty = require("pretty");

let url = "https://gol.gg/tournament/tournament-matchlist/VCS%20Spring%202022/";


const gameList = [];

const matchIDList = [];

//scrape player info
async function getMatchIDs() {
  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    // GET MATCHID LIST
    const matchListItems = $(".table_list tbody tr td.text-left");

    matchListItems.each((idx, el) => {
      const matchID = { matchID: "" };
      const linkString = $(el).children("a").attr('href');
      const linkMatchIdString = linkString.split('../game/stats/').pop().split('/page-summary/')[0];
      matchID.matchID = linkMatchIdString;

      matchIDList.push(matchID);
    });

  } catch (err) {
    console.error(err);
  }
}

//GET A GAME DETAILS
async function getGameDetails(matchID, gameID) {
  try {
    url = "https://gol.gg/game/stats/" + matchID + "/page-fullstats/";
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    //Getting all cell data from table
    const listItems = $(".completestats tr td");

    const tableDataList =[];
    let currentRow = 0;
    let currentCell = 0;
    tableDataList.push({title: "",cell: []})
    listItems.each((idx, el) => {
      const td = $(el).text()
      if(currentCell > 10){
        currentCell = 0;
        currentRow ++;
        tableDataList.push({title: "",cell: []})
      }if (currentCell == 0){
        tableDataList[currentRow]["title"] = td;
      }else{
        tableDataList[currentRow]["cell"].push(td);
      }
      currentCell ++;
    });

    // console.log(tableDataList)

    //Adding each player stats
    const playerNameList = tableDataList[0]["cell"];
    for (let i = 0; i <playerNameList; i ++){
      const game = {}
      game.matchID = matchID;
      game.gameID = gameID;
      function findStats(statsName){
        let obj = tableDataList.find(o => o.title === statsName);
        return obj
      }

      console.log(findStats("Total Heals On Teammates"))
      
      
      if (i==0){
        player1AName = playerNameList[i]
      }
      if (i==1){
        player2AName = playerNameList[i]
      }
      if (i==2){
        player3AName = playerNameList[i]
      }
      if (i==3){
        player4AName = playerNameList[i]
      }
      if (i==4){
        player5AName = playerNameList[i]
      }
      if (i==5){
        player1BName = playerNameList[i]
      }
      if (i==6){
        player2BName = playerNameList[i]
      }
      if (i==7){
        player3BName = playerNameList[i]
      }
      if (i==8){
        player4BName = playerNameList[i]
      }
      if (i==9){
        player5BName = playerNameList[i]
      }
    }





  } catch (err) {
    console.error(err);
  }
}
getMatchIDs();
getGameDetails("37056", "");