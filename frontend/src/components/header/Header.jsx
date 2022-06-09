import React from 'react'
import './Header.css'
import resume from '../../assets/resume.pdf'
import { BsLinkedin, BsGithub } from 'react-icons/bs'

const Header = () => {
  return (
    <div>
      Header
      <br />
      <a href={resume} download className='btn'>Download my resume</a>
      <h3>Hello, my name is</h3>
      <br />
      <h1>Roderick Tremayne Flowers, Jr.</h1>
      <br />
      <a href='https://www.linkedin.com/in/roderick-flowers-3a921821b/' target='_blank' rel='noreferrer'><BsLinkedin /></a>
      <a href='https://github.com/rfdoom' target='_blank' rel='noreferrer'><BsGithub /></a>
    </div>
  )
}

export default Header