import React from 'react'

const Hero = () => {
  return (
    <div className="hero">
        <video src="https://www.youtube.com/watch?v=d_NfBfw5Esc" muted></video>
        <h1>Welcome to Language Learner</h1>
        <p>Learn other foreign languages</p>
        <div className="buttons">
            <button className="started">Get Started</button>
            <button className="info">More Info</button>
        </div>
    </div>
  )
}

export default Hero