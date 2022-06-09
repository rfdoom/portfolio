import './Skills.css'
import javascriptLogo from '../../assets/javascriptLogo.png'
import reactLogo from '../../assets/reactLogo.png'
import pythonLogo from '../../assets/pythonLogo.png'
import htmlLogo from '../../assets/htmlLogo.png'
import djangoLogo from '../../assets/djangoLogo.png'
import cssLogo from '../../assets/cssLogo.png'

const Skills = () => {
  return(
    <section id='skills'>
      <h2>Technological Skills I Possess (but not limited to):</h2>
      <ul>
        <li><img src={ javascriptLogo } alt='JavaScript'/>JavaScript (ES6)</li>
        <li><img src={ pythonLogo } alt='Python'/>Python</li>
        <li><img src={ htmlLogo } alt='HTML5'/>HTML 5</li>
        <li><img src={ cssLogo } alt='CSS3'/>CSS 3</li>
        <li><img src={ djangoLogo } alt='Django'/>Django</li>
        <li><img src={ reactLogo } alt='React.js'/>React.js</li>
      </ul>
      <br />
      <h2>Let's Not Forget My Soft Skills:</h2>
      <ul>
        <li>Great Communication</li>
        <li>Valuable Teammember</li>
        <li>Problem-Solver</li>
        <li>Hard-Worker</li>
        <li>Goal-Oriented</li>
      </ul>
    </section>
  )
}

export default Skills;