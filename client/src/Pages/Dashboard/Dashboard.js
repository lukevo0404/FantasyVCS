import React, { useEffect, useState } from 'react'
import { Navbar } from '../../components/Navbar'
import './Dashboard.css'
import { matchList, scrapeMatchData, getGameDetails, gameList} from "../../scrapeGameInfo"
import { useNavigate } from 'react-router-dom'

function Dashboard() {
  const navigate = useNavigate()
  function loginCheck() {
      if (!localStorage.getItem("user")) {
          navigate('/signin')
      }
    }
    useEffect(() => {
      loginCheck()
    }, [])
  const [displayElements, setDisplayElements] = useState([])

  async function getMatchList() {
    await getGameDetails("37056", "37056","teamA");
    await scrapeMatchData()

    for (let i = 0; i < matchList.length; i++) {
      setDisplayElements(prevState => (
        [...prevState, <div className='match-wrapper'>
          <div className="score-player-wrapper">
            <img src="https://oracleselixir-player-photos.s3-us-west-2.amazonaws.com/98767975918707483.png" />
            <div>
              <h2 className="bigger">NPer</h2>
              <h2>SE</h2>
            </div>
          </div>
          <div className="player-score-text">
            <h2 className="final-score">98</h2>
            <h2 className="minus">-100</h2>
          </div>
          <div className="right-div">
          <div className="match-details">
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
    <div className="page-wrapper">
      <Navbar navStyle={undefined} />
      <div className="dashboard-flex">
        <div className="dashboard-container">
          <h2>YOUR DREAM TEAM</h2>
          <div className="player-row">
            <div className="player-wrapper">
              <img src="https://oracleselixir-player-photos.s3-us-west-2.amazonaws.com/98767975918707483.png" />
              <h2 className="small-text">NPer</h2>
            </div>
            <div className="player-wrapper">
              <img src="https://oracleselixir-player-photos.s3-us-west-2.amazonaws.com/98767975918707483.png" />
              <h2 className="small-text">NPer</h2>
            </div>
            <div className="player-wrapper">
              <img src="https://oracleselixir-player-photos.s3-us-west-2.amazonaws.com/98767975918707483.png" />
              <h2 className="small-text">NPer</h2>
            </div>
            <div className="player-wrapper">
              <img src="https://oracleselixir-player-photos.s3-us-west-2.amazonaws.com/98767975918707483.png" />
              <h2 className="small-text">NPer</h2>
            </div>
            <div className="player-wrapper">
              <img src="https://oracleselixir-player-photos.s3-us-west-2.amazonaws.com/98767975918707483.png" />
              <h2 className="small-text">NPer</h2>
            </div>
          </div>
          <div className="score-board">
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