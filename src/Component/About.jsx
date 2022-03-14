import React from 'react'
import Footer from './HomePageComponents/Footer'
import Header from './HomePageComponents/Header'
import Navbar from './HomePageComponents/Navbar'

const About = () => {
    return (
        <>
            <Header />
            <Navbar />

            <div style={{ width: "100%", backgroundColor: "green", height: "400px" }}><h1>This is About</h1>this is main content</div>

            <Footer />
        </>

    )
}

export default About