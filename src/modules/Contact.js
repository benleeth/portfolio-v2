import React, { useState } from "react"
import axios from "axios"

const Contact = ({
  key,
  sectionTitle='',
  showForm=true
}) => {
  const [submitted, setSubmit] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    document.getElementById('submit').classList.add('is-submitting')
    document.getElementById('submit').setAttribute('disabled', 'disabled')
    let form = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      comments: document.getElementById('comments').value
    }
    axios.post('http://localhost:1337/api/ezforms/submit', {formData: form})
    .then((res) => {
      setSubmit(!submitted)
      console.log(res)
    }).catch((error) => {
      alert('Whoops! There was an error.')
      document.getElementById('submit').classList.remove('is-submitting')
      document.getElementById('submit').removeAttribute('disabled')
      console.dir(error)
    }).finally(() => {
      console.log('Form submitted!')
    })
  }

  return (
    <section className="contact grid">
      {sectionTitle &&
        <div className="col-desk-16">
          <h2 className="section-title">{ sectionTitle }</h2>
        </div>
      }
      {!submitted &&
        <form onSubmit={ handleSubmit } className="col-desk-16 contact__form">
          <label className="contact__label">
            Name<span>*</span><br />
            <input className="contact__input" type="text" id="name" name="name" placeholder="Keyser Soze" required />
          </label>
          <label className="contact__label">
            Email<span>*</span><br />
            <input className="contact__input" type="email" id="email" name="email" placeholder="keyser@soze.com" required />
          </label>
          <label className="contact__label">
            Questions/Comments<span>*</span><br />
            <textarea className="contact__textarea" id="comments" name="comments" placeholder="I used to be in a barbershop quartet in Skokie, Illinois." required />
          </label>
          <input className="contact__submit" type="submit" id="submit" value="Submit" />
        </form>
      }
      {submitted &&
        <div className="col-desk-16">
          <h5 className="success">Form submitted successfully!</h5>
        </div>
      }
    </section>
  )
}

export default Contact
