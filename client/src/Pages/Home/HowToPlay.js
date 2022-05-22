import './HowToPlay.css'

import React from 'react'

const steps = [
  {
    stepNo: '1',
    title: "Select an initial squad of:",
    content: <>
    <p>Pick your favourite player for each role:
    <ul>
      <li>Top Lane
      </li>
      <li>Jungler 
      </li>
      <li>Middle Lane
      </li>
      <li>ADC 
      </li>
      <li>Support</li>
    </ul>
    </p>
    </>,
    image: './images/live-scoring.png',
    first: true,
  },
  {
    stepNo: '2',
    title: "Select your captain",
    content: <>
    <p>Select the most potential player in your team to be the captain. All captain points will be doubled!</p>
    </>,
    image: './images/Asset 6.png',

  },
  {
    stepNo: '3',
    title: "Understand the scores",
    content: <><p>Have a look at the Score Rule page to know how to the performance score are calculated.</p></>,
    image: './images/Asset 5.png',

  },
  {
    stepNo: '4',
    title: "Enjoy!",
    content: <><p>Get your popcorn, lay back and watch the Dream Team compete with your friends and family.</p></>,
    image: './images/live-scoring.png',

  }
]

function stepDiv(stepNo, title, content, image, first) {
  return (
    <div className="htp-step d-flex justify-content-center flex-column" id="howtoplay">
      <div className='htp-deco-line' id={first ? "line-1" : ""}></div>
      <div className='htp-deco-point' id={first ? "point-1" : ""}></div>
      <div>
        <div className="htp-text">
          <div className="htp-text-heading ">
            <div className="htp-step-no">
              <h2>{stepNo}</h2>
              <img src='./images/htp-triangle.png' />
            </div>
            <h2 className='htp-step-title'>{title}</h2>
          </div>

        </div>
        <div className='htp-step-content'>{content}</div>
      </div>
      <img src={image} className='htp-image' />
    </div>
  )
}

function HowToPlay() {

  return (
    <div className="htp-container">
      <div className="title-text-wrapper big-h1">
        <h1>HOW TO PLAY</h1>
        <p>Create your dream squad of professional League of Legends players and lead them to glory in the world's most popular fantasy esports game.</p>
      </div>

      <div className='htp-wrapper pt-5'>
        {steps.map(i => (
          stepDiv(i.stepNo, i.title, i.content, i.image, i.first)
        ))}

      </div>
    </div>
  )
}

export default HowToPlay