import React from 'react'
import { Link } from 'react-router-dom'

const navbar = () => {
  return (
    <div>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/about'>About</Link>
      </li>
      <li>
        <Link to='/skills'>Skills</Link>
      </li>
      <li>
        <Link to='/projects'>Projects</Link>
      </li>
      <li>
        <Link to='/coding-challenges'>Coding Challenges</Link>
      </li>
      <li>
        <Link to='/blog'>Blog</Link>
      </li>
      <li>
        <Link to='/contact'>Contact Me</Link>
      </li>
    </div>
  )
}

export default navbar;