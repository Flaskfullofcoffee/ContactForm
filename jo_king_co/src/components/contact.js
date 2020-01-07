import React from "react"
import contactStyles from './contact.module.scss'

const Contact = () => {

  return (
    <div className={contactStyles.container}>
      <div className={contactStyles.img} />
      <div className={contactStyles.formWrapper}>
        <form className={contactStyles.form} action="" id="contactMe" method="post">
          <h2 className={contactStyles.title}>Contact Me</h2>
          <div className={contactStyles.who}>
            <div>
              <label className={contactStyles.name} for="name">Name:</label>
              <input type="text" id="firstName" name="user_name" placeholder="First" className={contactStyles.user_input} required />
              <input type="text" id="lastName" name="user_name" placeholder="Last" className={contactStyles.user_input} required />
            </div>
            <div>
              <label className={contactStyles.email} for="email">Email:</label>
              <input type="email" id={contactStyles.email} name="user_email" placeholder="example@mail.com" className={contactStyles.user_input} required />
            </div>
          </div>
          <div className={contactStyles.comments}>
            <label for="comments" className={contactStyles.message}>Message:</label>
            <textarea name="comments" id="comments" cols="30" rows="10" className={contactStyles.input_field}></textarea>
          </div>
          <button id="submit" type="submit" className={contactStyles.submit_btn}>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact

{/* <div className={contactStyles.form_wrap}>
  <p id="description">Contact Me</p>
  <form action="" id="survey-form" method="post">
    <div className={contactStyles.who}>
      <div className={contactStyles.labels}>
        <label for="name">Name:</label>
        <input type="text" id="firstName" name="user_name" placeholder="First" className={contactStyles.user_input} required />
        <input type="text" id="lastName" name="user_name" placeholder="Last" className={contactStyles.user_input} required />
      </div>
      <div className={contactStyles.labels}>
        <label for="email">Email:</label>
        <input type="email" id="email" name="user_email" placeholder="example@mail.com" className={contactStyles.user_input} required />
      </div>
    </div>
    <div className={contactStyles.comment_section}>
      <label for="comments" className={contactStyles.comments}>Message?</label>
      <textarea name="comments" id="comments" cols="30" rows="10" className={contactStyles.input_field}></textarea>
    </div>
    <div className={contactStyles.btn-wrap}>
      <button id="submit" type="submit" className={contactStyles.submit-btn}>Submit</button>
    </div>
  </form>
</div> */}
