import React, { Component } from 'react'

export class Header extends Component {
    render() {
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
            <div>
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
            </div>
        )
    }
}

export default Header
