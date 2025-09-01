import { useState } from 'react'
import './App.css'

function App() {
  const [isReady, setIsReady] = useState(false)

  return (
    <>
      <div className="game-container">
        <h1 className="get-ready-title">Get Ready!</h1>
        <div className="game-info">
          <h2>Flappy Bird</h2>
          <div className="instructions">
            <p>🐦 Tap or click to make the bird fly</p>
            <p>🚫 Avoid the pipes</p>
            <p>🏆 Score points by passing through gaps</p>
          </div>
          <div className="card">
            <button 
              onClick={() => setIsReady(!isReady)}
              className={`ready-button ${isReady ? 'ready' : ''}`}
            >
              {isReady ? '✅ Ready to Play!' : '🎮 Click when Ready'}
            </button>
            {isReady && (
              <p className="start-message">
                Great! The Flappy Bird game will be created here.
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
