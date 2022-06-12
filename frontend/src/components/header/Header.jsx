import React from 'react'
import './Header.css'
import resume from '../../assets/resume.pdf'
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import { FaNewspaper } from 'react-icons/fa'

const Header = () => {
  return (
    <section>
      <div className='header'>
        <h3 className='hello'>Hello, my name is</h3>
        <h1 className='myname'>Roderick Tremayne Flowers, Jr</h1>
        <h3 className='hello'>And I would like to solve your problems!</h3>

          <div className='links'> 
            <a id='linkedin' href='https://www.linkedin.com/in/roderick-flowers-3a921821b/' title='LinkedIn' target='_blank' rel='noreferrer'><BsLinkedin /></a>
            <a id='github' href='https://github.com/rfdoom' title='GitHub' target='_blank' rel='noreferrer'><BsGithub /></a> 
            <a id='resume' href={resume} title='Download my Resume' download className='btn'><FaNewspaper /></a>
          </div>
        
      </div>

     
    </section>
  )
}

export default Header