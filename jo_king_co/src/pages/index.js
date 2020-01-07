import React from "react"
import { Link } from "gatsby"
import Layout from '../components/layout'
import About from '../components/about'
import Services from '../components/services'
import Grabber from '../components/grabber'
import Contact  from '../components/contact'
import indexStyles from './index.module.scss'


const IndexPage = () => {

  return (
    <Layout>
      <div className={indexStyles.container}>
        {/* <Logo /> Save for later */}
        <h2 className={indexStyles.title}>Social Media <br />Managment</h2>
        <p className={indexStyles.subtext}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <button className={indexStyles.link}>See More</button>
      </div>
      <About />
      <Services />
      <Grabber />
      <Contact />
    </Layout>
  )
}

export default IndexPage
