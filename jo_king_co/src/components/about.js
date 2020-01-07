import React from "react"
import aboutStyles from './about.module.scss'

const About = () => {

  return (
    <div className={aboutStyles.container}>
      <div className={aboutStyles.leftContent}>
        <h2 className={aboutStyles.title}>What I Do?</h2>
        <div className={aboutStyles.tiltedBox}>
          <div className={aboutStyles.illustration}></div>
        </div>
      </div>
      <div className={aboutStyles.rightContent}>
        <div className={aboutStyles.content}>
          <h2 className={aboutStyles.title}>Tailor-made plans that fit your small shop needs.</h2>
          <p className={aboutStyles.subtext}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <button className={aboutStyles.link}>Get started today</button>
        </div>
      </div>
    </div>
  )
}

export default About
