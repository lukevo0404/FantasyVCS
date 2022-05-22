import axios from "axios";
import cheerio from "cheerio";
import { attr } from "cheerio/lib/api/attributes";
import pretty from "pretty";
import { useState } from "react";




export const topList = [];
export const jungleList = [];
export const midList = [];
export const botList = [];
export const supportList = [];

export async function scrapePlayerData() {
  try {
    let i = 0;
    async function playerRoleScrape(url, list) {
      const { data } = await axios.get(url);
      const $ = cheerio.load(data);

      let listItems = $(".wikitable.sortable tr");
      
      listItems.each((idx, el) => {
        const player = { id: "", name: "", team: "", team_img: "", img: "" }
        player.team = $(el).children(".spstats-team").children("a").attr('title');
        player.name = $(el).children(".spstats-player").children("a").text();
        
        player.id = i.toString();
        i++;

        async function getTeamImage(link) {
          let url = link;
          const { data } = await axios.get(url);
          const $ = cheerio.load(data);

          const imgLinkString = $(".floatnone").first().children("a").attr("href")
          const imgLink = "https://static" + imgLinkString.split("https://static").pop().split('.png')[0] + ".png";
          player.team_img = imgLink;

        }

        async function getImg(link){
          let url = link;
          const { data } = await axios.get(url);
          const $ = cheerio.load(data);

          const imgLinkString = $(".floatnone").first().children("a").attr("href")
          const imgLink = "https://static" + imgLinkString.split("https://static").pop().split('.png')[0] + ".png";
          player.img = imgLink;
        }

        let teamURL = "https://lol.fandom.com" + $(el).children(".spstats-team").children("a").attr('href');
        getTeamImage(teamURL)

        let imgURL = "https://lol.fandom.com" + $(el).children(".spstats-player").children("a").attr('href');
        getImg(imgURL)

        if(player.name !== ''){
          list.push(player)
        }
        
      })


    }

    let url = "https://lol.fandom.com/wiki/Special:RunQuery/TournamentStatistics?TS%5Bpreload%5D=TournamentByPlayerRole&TS%5Brole%5D=Top&TS%5Btournament%5D=VCS%2F2022+Season%2FSpring+Season&_run="
    playerRoleScrape(url, topList)

    url = "https://lol.fandom.com/Special:RunQuery/TournamentStatistics?TS%5Bpreload%5D=TournamentByPlayerRole&TS%5Brole%5D=Jungle&TS%5Btournament%5D=VCS/2022%20Season/Spring%20Season&_run="
    playerRoleScrape(url, jungleList)

    url = "https://lol.fandom.com/wiki/Special:RunQuery/TournamentStatistics?TS%5Bpreload%5D=TournamentByPlayerRole&TS%5Brole%5D=Mid&TS%5Btournament%5D=VCS%2F2022+Season%2FSpring+Season&_run="
    playerRoleScrape(url, midList)
    
    url = "https://lol.fandom.com/Special:RunQuery/TournamentStatistics?TS%5Bpreload%5D=TournamentByPlayerRole&TS%5Brole%5D=Bot&TS%5Btournament%5D=VCS/2022%20Season/Spring%20Season&_run="
    playerRoleScrape(url, botList)

    url = "https://lol.fandom.com/wiki/Special:RunQuery/TournamentStatistics?TS%5Bpreload%5D=TournamentByPlayerRole&TS%5Brole%5D=Support&TS%5Btournament%5D=VCS%2F2022+Season%2FSpring+Season&_run="
    playerRoleScrape(url, supportList)

    console.log(topList)
    return true 

  } catch (err) {
    console.error(err);
  }
}