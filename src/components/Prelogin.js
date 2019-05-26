import React from 'react'
import { Link } from 'react-router-dom';


function Prelogin() {
  return (
    <div className="prelogin">
      <h1 className="prelogin-title">PlayPix</h1>
      <p className="prelogin-subtitle">The best place to follow your passions and spark long lasting relationships!</p>
      <div className="prelogin-buttons">
        <Link to={'/login'}>
          <button className="btn secondary-red">login</button>
        </Link>
        <Link to={'/signup'}>
          <button className="btn secondary">signup</button>
        </Link>
      </div>
    </div>
  )
}

export default Prelogin
