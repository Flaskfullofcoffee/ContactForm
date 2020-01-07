import React from "react"
import servicesStyles from './services.module.scss'

const Services = () => {

  return (
    <div className={servicesStyles.container}>
        <div className={servicesStyles.header}>
          <h2 className={servicesStyles.title}>– Monthly services –</h2>
          <p className={servicesStyles.subtext}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className={servicesStyles.illustration}>
          <div className={servicesStyles.object}></div>
        </div>
    </div>
  )
}

export default Services
