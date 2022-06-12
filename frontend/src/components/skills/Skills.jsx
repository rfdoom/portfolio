import './Skills.css'
import javascriptLogo from '../../assets/javascriptLogo.png'
import reactLogo from '../../assets/reactLogo.png'
import pythonLogo from '../../assets/pythonLogo.png'
import htmlLogo from '../../assets/htmlLogo.png'
import djangoLogo from '../../assets/djangoLogo.png'
import cssLogo from '../../assets/cssLogo.png'

const Skills = () => {
  return(
    <section className='skills-container'>
      <h2>Technological Skills I Possess</h2>
      <div className='skills set-one'>
        <img title='JavaSript (ES6)' className='img' src={ javascriptLogo } alt='JavaScript'/>
        <img title='Python' className='img' src={ pythonLogo } alt='Python'/>
        <img title='HTML5' className='img' src={ htmlLogo } alt='HTML5'/>
        
      </div>
      <div className='skills set-two'>
        <img title='CSS3' className='img' src={ cssLogo } alt='CSS3'/>
        <img title='Django REST Framework' className='img' src={ djangoLogo } alt='Django'/>
        <img title='React.js' className='img' src={ reactLogo } alt='React.js'/>
      </div>
        
    </section>
  )
}

export default Skills;