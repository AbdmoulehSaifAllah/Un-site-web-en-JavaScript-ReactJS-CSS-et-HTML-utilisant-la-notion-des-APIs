import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
        <p>
        <Link to="./">Home</Link>
        </p>
        <p>
        <Link to="./Contact">Contact</Link>
        </p>
        <p>
        <Link to="./AboutUs">AboutUs</Link>
        </p>
    </div>
  )
}

export default Header