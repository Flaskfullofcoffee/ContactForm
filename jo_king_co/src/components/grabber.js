import React from "react"
import grabberStyles from './grabber.module.scss'

const Grabber = () => {

  return (
    <div className={grabberStyles.container}>
      <div className={grabberStyles.header}>
        <h2 className={grabberStyles.title}>Let me help you!</h2>
      </div>
      <div className={grabberStyles.btns}>
        <button className={grabberStyles.link}>Yes Please!</button>
        <button className={grabberStyles.link}>Tell me More</button>
      </div>
    </div>
  )
}

export default Grabber
