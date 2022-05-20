import React, { useEffect, useState } from 'react'
import { Navbar } from '../../../components/Navbar'
import './Dashboard.css'
import { matchList, scrapeMatchData, getGameDetails, gameList } from "../../../scrapeGameInfo"

function Dashboard() {

  const [displayElements, setDisplayElements] = useState([])

  async function getMatchList() {
    await getGameDetails("37056", "37056","teamA");
    await scrapeMatchData()

    for (let i = 0; i < matchList.length; i++) {
      setDisplayElements(prevState => (
        [...prevState, <div className='match-wrapper'>
          <div class="score-player-wrapper">
            <img src="https://oracleselixir-player-photos.s3-us-west-2.amazonaws.com/98767975918707483.png" />
            <div>
              <h2 class="bigger">NPer</h2>
              <h2>SE</h2>
            </div>
          </div>
          <div class="player-score-text">
            <h2 class="final-score">98</h2>
            <h2 class="minus">-100</h2>
          </div>
          <div class="right-div">
          <div class="match-details">
            <h2>{matchList[i].teamA} vs {matchList[i].teamB}</h2>
            <h2 className='score-text'>{matchList[i].teamAscore} - {matchList[i].teamBscore}</h2>
          </div>
          <p>{matchList[i].date}</p>
          </div>
          
        </div>]
      ))
    }
    console.log(gameList)
  }


  useEffect(() => {
    getMatchList()
  }, [])
  return (
    <div class="page-wrapper">
      <Navbar />
      <div class="dashboard-flex">
        <div className="dashboard-container">
          <h2>YOUR DREAM TEAM</h2>
          <div class="player-row">
            <div class="player-wrapper">
              <img src="https://oracleselixir-player-photos.s3-us-west-2.amazonaws.com/98767975918707483.png" />
              <h2 class="small-text">NPer</h2>
            </div>
            <div class="player-wrapper">
              <img src="https://oracleselixir-player-photos.s3-us-west-2.amazonaws.com/98767975918707483.png" />
              <h2 class="small-text">NPer</h2>
            </div>
            <div class="player-wrapper">
              <img src="https://oracleselixir-player-photos.s3-us-west-2.amazonaws.com/98767975918707483.png" />
              <h2 class="small-text">NPer</h2>
            </div>
            <div class="player-wrapper">
              <img src="https://oracleselixir-player-photos.s3-us-west-2.amazonaws.com/98767975918707483.png" />
              <h2 class="small-text">NPer</h2>
            </div>
            <div class="player-wrapper">
              <img src="https://oracleselixir-player-photos.s3-us-west-2.amazonaws.com/98767975918707483.png" />
              <h2 class="small-text">NPer</h2>
            </div>
          </div>
          <div class="score-board">
            <h2>TOTAL SCORE: 1125</h2>
          </div>
        </div>
        <div className="dashboard-container" id="match-list">
          {displayElements}
        </div>
      </div>

    </div>
  )
}

export default Dashboard