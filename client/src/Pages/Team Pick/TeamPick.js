import React, { useEffect, useState } from 'react'
import { Navbar } from '../../components/Navbar'
import './TeamPick.css'
import { useNavigate } from 'react-router-dom'
import { scrapePlayerData, topList, jungleList, midList, botList, supportList } from '../../scrapePlayerInfo'

function TeamPick() {
  const navigate = useNavigate()
  function loginCheck() {
      if (!localStorage.getItem("user")) {
          navigate('/signin')
      }
    }
    useEffect(() => {
      loginCheck()
    }, [])

    async function getPlayer() {
      await scrapePlayerData();
      console.log(topList)
      console.log(jungleList)
      console.log(midList)
      console.log(botList)
      console.log(supportList)
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

      </div>

    </div>
  )
}

export default TeamPick