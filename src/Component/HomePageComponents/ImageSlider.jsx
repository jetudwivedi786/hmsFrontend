import React from 'react'
import { Carousel } from 'react-bootstrap';

const img = {
    width: "100%",
    height: "500px"
}
const ImageSlider = () => {


    return (
        <>

            <div style={{ backgroundColor: "red" }}>
                <Carousel>
                    <Carousel.Item>
                        <img style={img}

                            src="./images/1.jpg"
                            alt="First slide"
                        />
                        {/* <Carousel.Caption>
                            <h3>Welcome HMS</h3>
                            <p>Visit Now</p>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                    <Carousel.Item>
                        <img style={img}
                            src="./images/2.jpg"
                            alt="Second slide"
                        />


                    </Carousel.Item>
                    <Carousel.Item>
                        <img style={img}
                            src="./images/3.jpg"
                            alt="Third slide"
                        />

                    </Carousel.Item>
                </Carousel>
            </div>





        </>


    )
}

export default ImageSlider