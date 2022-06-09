import './About.css'

const About = () => {
  return (
    <section id='about'>
      <p className="intro-para">
        I was previously an Avionics Technician for the United States Military, and I've made the jump into becoming a Full-Stack Developer. Although I have skills in both front- and back-end technologies, I feel as though my passion lies on the client-side front-end of the development cycle. I am currently in school finishing my Bachelor's degree in Information Technology and I have completed the highly-rated coding bootcamp Code Platoon. I am very goal-oriented and a people-pleaser. I enjoy working in teams of diverse individuals and learning from them in order to progress myself as a successful Developer.
      </p>
      <div>
        <a href="#contact">Contact Me</a>
        <a href="#projects">See My Past Work</a>
        <a href="#skills">See What I'm Good At</a>
        <a href="#challenges">See How I Solved Challenges From Popular Sites</a>
      </div>
    </section>
  )
}

export default About;