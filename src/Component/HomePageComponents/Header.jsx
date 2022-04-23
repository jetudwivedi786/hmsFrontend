import React from 'react'
import Logo from "./logo2.png"

const Header = () => {
    return (
        <>
            <div style={{ backgroundColor: "#912e2e" }}>
                <h1><img src={Logo} style={{ width: 140, height: 140, borderRadius: 70 }} />
                    <span style={{ paddingLeft: "10%", color: "white", fontWeight: "bold", fontFamily: 'Sansita Swashed', fontSize: "50px" }}> Hotel Management System</span></h1>
            </div>
        </>
    )
}

export default Header