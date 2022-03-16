import React from 'react'
import Footer from './HomePageComponents/Footer'
import Header from './HomePageComponents/Header'
import Navbar from './HomePageComponents/Navbar'

const About = () => {
    return (
        <>
            <Header />
            <Navbar />

            <div style={{ width: "100%", backgroundColor: "#66a8b8", height: "400px" }}>
                <p> <center><span style={{ fontSize: "40px" }}>H</span>MS Hotel is a perfect venue for a comfortable stay as well as business meetings, conferences and trainings.</center>

                    <center><h3>PERFECT LOCATION</h3></center>
                    <p class="animate__animated animate__fadeInUp animate__delay-.5s" style={{ textAlign: "center" }}>in the capital city of abc<br />
                        HMS Hotel is located a 2-minute drive from the A2 highway,<br />
                        5.5 kilometers from the Poznań International Fair and near the  railway station.<br />

                        The hotel offers 61 modern Classic rooms (single or double) and 5 suites, including luxurious<br />
                        Presidential Suite. Rooms in Grand Royal Hotel are spacious and air-conditioned. Each of them provides wireless <br />
                        Internet access, mini bar, coffee making facility, satellite LCD television, bathrobes and a hairdryer. During their stay,<br /> hotel guests can enjoy the Wellness zone of the SPA Center comprising a swimming pool, sauna, jacuzzi and a large gym for free.
                    </p>
                </p>



            </div>

            <Footer />
        </>

    )
}

export default About