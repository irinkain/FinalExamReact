import React from 'react'
import './style.css'

const ScrenPreloader = () => {
  return (
    <div className="container">
      <div className="cube">
        <div className="sides">
          <div className="top" />
          <div className="right" />
          <div className="bottom" />
          <div className="left" />
          <div className="front" />
          <div className="back" />
        </div>
      </div>
    </div>
  )
}

export default ScrenPreloader
