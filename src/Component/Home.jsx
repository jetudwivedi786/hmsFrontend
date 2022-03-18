import React from 'react'
import Header from "./HomePageComponents/Header";
import Navbar from "./HomePageComponents/Navbar";
import Footer from './HomePageComponents/Footer';
import ImageSlider from './HomePageComponents/ImageSlider';
import Button from '@mui/material/Button';
import Avatar from "@mui/material/Avatar"
import Navbar2 from './HomePageComponents/Navbar2';



const Home = () => {


    return (
        <>

            {/* <Button variant="outlined">Outlined</Button>
            <Avatar sx={{ bgcolor: "orange" }}>N</Avatar> */}

            <Header />
            {/* <Navbar /> */}
            <Navbar2 />
            <ImageSlider />

            <Footer />

        </>


    )
}

export default Home
