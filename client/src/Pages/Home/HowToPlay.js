import './HowToPlay.css'

import React from 'react'

const steps = [
  {
    stepNo: '1',
    title: "League Set Up",
    content: <><ul>
      <li>3750 Alpha pass sale</li>
      <li>Public Sale Dec 12th 2021 9pm EST @ 0.11ETH</li>
      <li>Early access to playable game MID DEC 2021</li>
      <li>Players can start catching Venari creatures</li>
    </ul></>,
    image: './images/live-scoring.png',
    first: true,
  },
  {
    stepNo: '2',
    title: "Drafting",
    content: <><ul>
      <li>3750 Alpha pass sale</li>
      <li>Public Sale Dec 12th 2021 9pm EST @ 0.11ETH</li>
      <li>Early access to playable game MID DEC 2021</li>
      <li>Players can start catching Venari creatures</li>
    </ul></>,
        image: './images/live-scoring.png',

  }
]

function stepDiv(stepNo, title, content, image, first) {
  return (
    <div className="htp-step d-flex justify-content-center flex-column">
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
          stepDiv(i.stepNo, i.title, i.content,i.image, i.first)
        ))}

      </div>
    </div>
  )
}

export default HowToPlay