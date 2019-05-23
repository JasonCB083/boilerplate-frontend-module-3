import React from 'react'
import { Link } from 'react-router-dom';


function Prelogin() {
  return (
    <div>
      <h1>i am prelogin</h1>

      <Link to={'/login'}>
      <button>login</button>
      </Link>
      <Link to={'/signup'}>
      <button>signup</button>
      </Link>



    </div>
  )
}

export default Prelogin
