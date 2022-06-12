import React from 'react'
import './Experience.css'
import cssLogo from '../../assets/cssLogo.png'

const Experience = () => {
  return (
    <section id='experience-container'>
      <h1>Experience</h1>
      <div id='experience'>
        
        <div className='thumbnail'>{/* first project -- DO NOT CHANGE CLASSES!!! */}
          <img className='pimage' src={ cssLogo } alt='#'/>
          <div className='hover hover--blur'>
            <div className='project-title'><>Sample Title</></div>
            <p className='project-desc'>Sample Desc</p>
          </div>
        </div>
        <div className='thumbnail'>{/* second project -- DO NOT CHANGE CLASSES!!! */}
          <img className='pimage' src={ cssLogo } alt='#'/>
          <div className='hover hover--blur'>
            <div className='project-title'><>Sample Title</></div>
            <p className='project-desc'>Sample Desc</p>
          </div>
        </div>
        <div className='thumbnail'>{/* third project -- DO NOT CHANGE CLASSES!!! */}
          <img className='pimage' src={ cssLogo } alt='#'/>
          <div className='hover hover--blur'>
            <div className='project-title'><>Sample Title</></div>
            <p className='project-desc'>Sample Desc</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience