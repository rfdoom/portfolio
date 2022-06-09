import React from 'react'
import './Navbar.css'
import { AiFillHome } from 'react-icons/ai'
import { GiSkills, GiBrain } from 'react-icons/gi'
import { BsFillPersonFill } from 'react-icons/bs'
import { MdContactMail } from 'react-icons/md'

const Navbar = () => {
  return (
    <nav>
      <a href='#' title='Back To The Top'><AiFillHome /></a>
      <a href='#about' title='Learn About Me'><BsFillPersonFill /></a>
      <a href='#skills' title='Check My Skills'><GiSkills /></a>
      <a href='#experience' title='See What I Have Worked On' ><GiBrain /></a>
      <a href='#contact' title='Get In Touch With Me'><MdContactMail /></a>
    </nav>
  )
}

export default Navbar