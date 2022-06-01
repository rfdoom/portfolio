const Contact = () => {
  return (
    <div>
      <h2>Like what you see? Contact me !</h2>
      <section>
        <form action='https://formsubmit.co/roderickflowersjr@gmail.com' method="POST">
          <input type='text' name='name' placeholder='Enter your full name here...' required/>
          <input type='email' name='email' placeholder='Enter your email here...' required/>
          <input type='text' name='subject' placeholder='Enter the subject here...' required/>
          <textarea name='message' placeholder='Enter your message here...' rows='10' required/>
          <button type='submit'>Submit Form</button>
        </form>
      </section>
    </div>
  )
}

export default Contact;