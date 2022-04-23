import React from 'react'

const Footer = () => {
    return (
        <><footer class="panel-footer p-2 " style={{ backgroundColor: "#3e5563", color: "white" }}>
            <div class="container">
                <div class="row">

                    <section id="hours" class="col-sm-4">
                        <span>Hours:</span><br />
                        Availability 24×7<br />

                        <hr class="visible-xs" />
                    </section>
                    <section id="address" class="col-sm-4">
                        <span>Address:</span><br />
                        7105 Reisterstown Road<br />
                        Baltimore, MD 21215
                        <hr class="visible-xs" />
                    </section>
                    <section id="testimonials" class="col-sm-4">
                        <p>"The best Hotel I've been to! And that's saying a lot, since I've been to many!"</p>
                        <p>"Amazing room service! Great service! Couldn't ask for more! I'll be back again and again!"</p>
                        <hr />
                    </section>

                </div>
                <div class="text-center">&copy; Copyright HMS 2021</div>
            </div>
        </footer></>
    )
}

export default Footer