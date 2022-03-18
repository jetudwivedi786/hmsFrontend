import React from 'react'

const Header = () => {
    return (
        <>
            <div style={{ backgroundColor: "#912e2e" }}>
                <h1><img src='./images/logo.png' style={{ width: 150, height: 150, borderRadius: 50 }} />
                    <span style={{ paddingLeft: "10%", color: "white", fontWeight: "bold", fontFamily: 'Sansita Swashed', fontSize: "50px" }}> Hotel Management System</span></h1>
            </div>
        </>
    )
}

export default Header