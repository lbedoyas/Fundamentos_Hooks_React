import React, { useState } from 'react'

const Header = () => {
    const styles = {
      background: 'linear-gradient(20deg, #6813cb, #2575fc)',
      textAlign: 'center',
      borderRadius: '0.2em',
      color: '#FFF',
      padding: '0.3em',
      margin: '0.3em',
      fontSize: '14px'
    }
    return (
      <header style={styles}>
        <h1>
          Hook useState
          <span
            role='img'
            aria-label='hook emoji'
          >
            ⚓
          </span> 
        </h1>
      </header>
    )
  }

const ExampleUseState = () => {
    const [ clicks, setClicks ] = useState(0)
    const addClicks = () => {
        setClicks(clicks + 1)
      }
      return (
        <div>
          <Header />
          <button onClick={addClicks}>
            Clicks ({ clicks })
          </button>
        </div>
      )
}


export default ExampleUseState
