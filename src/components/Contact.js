import React from 'react'

function Contact() {
    const sendmessage = () => {
        alert(" Thank you. We will get back to you as soon as we can!. !")
    }
    return (
        <>
            <section class="contact_us">
                <div class="container">
                    <div class="row">
                        <div class="col-md-10 offset-md-1">
                            <div class="contact_inner">
                                <div class="row">
                                    <div class="col-md-10">
                                        <div class="contact_form_inner">
                                            <div class="contact_field">
                                                <h3 style={{ color: "#FEA116" }}>Contatc Us</h3>
                                                <p>Feel Free to contact us any time. We will get back to you as soon as we can!.</p>
                                                <input type="text" class="form-control form-group" placeholder="Name" />
                                                <input type="text" class="form-control form-group" placeholder="Email" />
                                                <textarea class="form-control form-group" placeholder="Message"></textarea>
                                                <button class="contact_form_submit" onClick={sendmessage}>Send Message</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-2">
                                        <div class="right_conatct_social_icon d-flex align-items-end">
                                            <div class="socil_item_inner d-flex">
                                                <li><a href="/"><i class="fab fa-facebook-square"></i></a></li>
                                                <li><a href="/"><i class="fab fa-instagram"></i></a></li>
                                                <li><a href="/"><i class="fab fa-twitter"></i></a></li>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="contact_info_sec">
                                    <h4>Contact Info</h4>
                                    <div class="d-flex info_single align-items-center">
                                        <i class="fas fa-headset"></i>
                                        <span>+91 8009 054294</span>
                                    </div>
                                    <div class="d-flex info_single align-items-center">
                                        <i class="fas fa-envelope-open-text"></i>
                                        <span>info@flightmantra.com</span>
                                    </div>
                                    <div class="d-flex info_single align-items-center">
                                        <i class="fas fa-map-marked-alt"></i>
                                        <span>1000+ Travel partners and 65+ Service city across India, USA, Canada & UAE</span>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Contact
