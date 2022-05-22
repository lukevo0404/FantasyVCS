import React, { useEffect, useState } from 'react'
import { Navbar } from '../../components/Navbar'
import './TeamPick.css'
import { useNavigate } from 'react-router-dom'
import { scrapePlayerData, topList, jungleList, midList, botList, supportList } from '../../scrapePlayerInfo'
import ReactLoading from 'react-loading';

function TeamPick() {
  const [top, setTop] = useState([])
  const [mid, setMid] = useState([])
  const [jungle, setJungle] = useState([])
  const [bot, setBot] = useState([])
  const [support, setSupport] = useState([])
  const navigate = useNavigate()

  

  const [isLoading, setLoading] = useState(true)

  function loginCheck() {
    if (!localStorage.getItem("user")) {
      navigate('/signin')
    }
  }
  useEffect(() => {
    loginCheck()
  }, [])

  let teamPick = {
    player1: '', player2: '', player3: '', player4: '', player5: ''
  }

  function onClickButton(player,id) {
    if(player == 1){
      console.log(document.getElementById("top " + id).getAttribute("id"))
      teamPick.player1 = id;
    }
    if(player == 2){
      teamPick.player2 = id;
    }
    if(player == 3){
      teamPick.player3 = id;
    }
    if(player ==4){
      teamPick.player4 = id;
    }
    if(player == 5){
      teamPick.player5 = id;
    }
    
    console.log(teamPick)
  }
  async function getPlayer() {
    await scrapePlayerData();

    await setTimeout(() => {

      for (let i = 0; i < topList.length; i++) {
        setTop(prevState => (
          [...prevState,
          <div className='picker-col'>
            <button id={"top " + topList[i].id} onClick={() => onClickButton(1,topList[i].id)}>SELECT</button>
            <img className='player-img' src={topList[i].img} />
            <div className='picker-details'>
              <div className='team'>
                <img className='team-img' src={topList[i].team_img} />
                <h2>{topList[i].team}</h2>
              </div>
              <h2>{topList[i].name}</h2>
            </div>
          </div>
          ]
        ))
      }

      for (let i = 0; i < jungleList.length; i++) {
        setJungle(prevState => (
          [...prevState,

          <div className='picker-col'>
            <button id={"jungle " + jungleList[i].id} onClick={() => onClickButton(2,jungleList[i].id)}>SELECT</button>
            <img className='player-img' src={jungleList[i].img} />
            <div className='picker-details'>
              <div className='team'>
                <img className='team-img' src={jungleList[i].team_img} />
                <h2>{jungleList[i].team}</h2>
              </div>
              <h2>{jungleList[i].name}</h2>
            </div>
          </div>
          ]
        ))
      }

      for (let i = 0; i < midList.length; i++) {
        setMid(prevState => (
          [...prevState,

          <div className='picker-col'>
            <button id={"mid " + midList[i].id} onClick={() => onClickButton(3,midList[i].id)}>SELECT</button>
            <img className='player-img' src={midList[i].img} />
            <div className='picker-details'>
              <div className='team'>
                <img className='team-img' src={midList[i].team_img} />
                <h2>{midList[i].team}</h2>
              </div>
              <h2>{midList[i].name}</h2>
            </div>
          </div>
          ]
        ))
      }

      for (let i = 0; i < botList.length; i++) {
        setBot(prevState => (
          [...prevState,

          <div className='picker-col'>
            <button id={"bot " + botList[i].id} onClick={() => onClickButton(4,botList[i].id)}>SELECT</button>
            <img className='player-img' src={botList[i].img} />
            <div className='picker-details'>
              <div className='team'>
                <img className='team-img' src={botList[i].team_img} />
                <h2>{botList[i].team}</h2>
              </div>
              <h2>{botList[i].name}</h2>
            </div>
          </div>
          ]
        ))
      }

      for (let i = 0; i < supportList.length; i++) {
        setSupport(prevState => (
          [...prevState,
          <div className='picker-col'>
            <button id={"support " + supportList[i].id} onClick={() => onClickButton(5,supportList[i].id)}>SELECT</button>
            <img className='player-img' src={supportList[i].img} />
            <div className='picker-details'>
              <div className='team'>
                <img className='team-img' src={supportList[i].team_img} />
                <h2>{supportList[i].team}</h2>
              </div>
              <h2>{supportList[i].name}</h2>
            </div>
          </div>
          ]
        ))
      }

      setLoading(false)
    }, 7000);
  }
  useEffect(() => {
    getPlayer()
  }, [])


  return (
    <div className="page-wrapper">
      <Navbar navStyle={undefined} />
      <div className='container d-flex align-content-center flex-column'>
        <h1 className='text-center'>VCS SPRING 2022 CHAMPIONSHIP</h1>
        <h2 className='text-center'>Build your dream team with your favourite player</h2>
        <div className='picker-div'>
          <h2>TOP LANE</h2>
          <div className='picker-scroll'>
            {top}
            {isLoading ? <ReactLoading type={"bars"} color={"#ffffff"} height={'20%'} /> : ""}
          </div>
        </div>
        <div className='picker-div'>
          <h2>MIDDLE LANE</h2>
          <div className='picker-scroll'>
            {mid}
            {isLoading ? <ReactLoading type={"bars"} color={"#ffffff"} height={'20%'} /> : ""}
          </div>
        </div>
        <div className='picker-div'>
          <h2>JUNGLE LANE</h2>
          <div className='picker-scroll'>
            {jungle}
            {isLoading ? <ReactLoading type={"bars"} color={"#ffffff"} height={'20%'} /> : ""}

          </div>
        </div>
        <div className='picker-div'>
          <h2>BOTTOM LANE</h2>
          <div className='picker-scroll'>
            {bot}
            {isLoading ? <ReactLoading type={"bars"} color={"#ffffff"} height={'20%'} /> : ""}

          </div>
        </div>

        <div className='picker-div'>
          <h2>SUPPORT LANE</h2>
          <div className='picker-scroll'>
            {support}
            {isLoading ? <ReactLoading type={"bars"} color={"#ffffff"} height={'20%'} /> : ""}

          </div>
        </div>
      </div>

    </div>
  )
}

export default TeamPick