import React from 'react'

function About() {
    return (
        <>
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img style={{ height: "500px" }} src="https://plus.unsplash.com/premium_photo-1670984935550-5ce2e220977a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D" class=" w-100 " alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5 style={{ color: "#FEA116", fontSize: "40px", fontWeight: "700", fontFamily: "monospace" }}>Welcome to <i style={{ color: "#FEA116", fontSize: "35px" }} className="fa fa-utensils"></i> Restoran</h5>
                            <p style={{ fontSize: "20px" }}>Some representative placeholder content for the first slide Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container">
                <div className="head">
                    <h1 style={{ color: "#FEA116", textAlign: "center", fontSize: "38px", fontFamily: "monospace", marginTop: "20px", fontWeight: "700" }}>About Our Restorn</h1><hr style={{ width: "24%", marginLeft: "36%" }} />
                </div>
                <div className="row" style={{ marginTop: "35px" }}>
                    <div className="col-6">
                        <img src="https://media.istockphoto.com/id/1464025922/photo/happy-smiling-young-couple-having-dinner-while-talking-eachother-during-candle-light-dinner.webp?b=1&s=170667a&w=0&k=20&c=J8sxhQ03ob_FW0NR_lcxAi-dctqPpo0FQtQDAfE68zM=" alt="" />
                    </div>
                    <div className="col-6">
                        <div className="head" style={{ marginTop: "30px" }}>
                            <h3 style={{ fontSize: "35px", fontWeight: "700" }}>Welcome to <i style={{ color: "#FEA116", fontSize: "28px" }} className="fa fa-utensils"></i> Restoran</h3>
                            <p style={{ marginTop: "25px" }}>A unique place where perfect blend of sea and forest landscape welcomes bald contemporary design engraving new Restoran in the history of fabled Georgian hospitality. Chic and sophisticated, the exotically inspired retreat creates profound feeling of divine harmony and seamless relaxation by the Black Sea Coast.</p>
                            <p style={{ marginTop: "25px" }}>Feeling of serenity will slowly follow, as you drive further through the ancient pine tree forest to our state of the art retreat. Upon entering, you are bound to be allured by the striking element of design, the one of its kind walkthrough aquarium.</p>
                        </div>
                    </div>
                </div>
                <div className="row" style={{ marginTop: "50px" }}>
                    <div className="col-6">
                        <div className="head" style={{ marginTop: "30px" }}>
                            <p style={{ marginTop: "25px" }}>
                                <strong>I always enjoy eating at a restaurant</strong>  probably because it means I do not have to cook! My mother always told me that it is much more healthier for me to have a meal at home. I actually like cooking, but sometimes it wastes a lot of time, because of my busy study.</p>
                            <p style={{ marginTop: "25px" }}> I am so happy to introduce it. It is located in the campus near my class, I visit this restaurant 5 to 6 times per week. The first time when I visited, I instantly felt the great welcome and smelled the delicious food.</p>
                        </div>
                    </div>
                    <div className="col-6">
                        <img src="https://images.unsplash.com/photo-1592861956120-e524fc739696?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D" alt="" />
                    </div>
                </div>
            </div>

            <div className="container" style={{ marginTop: "50px" }}>
                <div className="head">
                    <h1 style={{ color: "#FEA116", textAlign: "center", fontSize: "38px", fontFamily: "monospace", marginTop: "20px", fontWeight: "700" }}>Happy Clients And Their Review's</h1><hr style={{ width: "20%", marginLeft: "39%" }} />
                </div>
                <div className="row" style={{ marginTop: "35px" }}>
                    <div className="col-3 text-center">
                        <img className='rounded-circle center' style={{ height: "150px", widows: "150px"}} src="https://themewagon.github.io/restoran/img/testimonial-2.jpg" alt="" />
                        <h5 style={{ marginTop: "5px", textAlign:"center" }}>Amit Shaw</h5>
                        <p style={{textAlign:"center"}}>Proffesor</p>
                    </div>
                    <div className="col-3 text-center">
                        <img className='rounded-circle center' style={{ height: "150px", widows: "150px" }} src="https://themewagon.github.io/restoran/img/testimonial-1.jpg" alt="" />
                        <h5 style={{ marginTop: "5px", textAlign:"center" }}>Naina Talwar</h5>
                        <p style={{textAlign:"center"}}>CEO(Esha Foundation)</p>
                    </div>
                    <div className="col-3 text-center">
                        <img className='rounded-circle center' style={{ height: "150px", widows: "150px" }} src="https://themewagon.github.io/restoran/img/testimonial-3.jpg" alt="" />
                        <h5 style={{ marginTop: "5px", textAlign:"center" }}>Raghav Shaw</h5>
                        <p style={{textAlign:"center"}}>Developer</p>
                    </div>
                    <div className="col-3 text-center">
                        <img className='rounded-circle center' style={{ height: "150px", widows: "150px" }} src="https://themewagon.github.io/restoran/img/testimonial-4.jpg" alt="" />
                        <h5 style={{ marginTop: "5px", textAlign:"center" }}>Tara Shekhar</h5>
                        <p style={{textAlign:"center"}}>Businessman</p>
                    </div>
                </div>
            </div>

            <div className="container" style={{marginTop:"35px"}}>
                <div className="row">
                    <div className="col-3">
                        <div class="card" style={{width:"18rem"}}>
                                <div class="card-body">
                                    <h5 class="card-title">I am Amit Shaw</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <div style={{fontSize:"25px", color:"#FEA116"}}>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    </div>
                                    <a style={{marginTop:"10px"}}href="/" class="btn btn-dark">Read More</a>
                                </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div class="card" style={{width:"18rem"}}>
                                <div class="card-body">
                                    <h5 class="card-title">I am Naina Talwar</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <div style={{fontSize:"25px", color:"#FEA116"}}>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star-half-stroke"></i>                                    </div>
                                    <a style={{marginTop:"10px"}}href="/" class="btn btn-dark">Read More</a>
                                </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div class="card" style={{width:"18rem"}}>
                                <div class="card-body">
                                    <h5 class="card-title">I am Raghav Shaw</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <div style={{fontSize:"25px", color:"#FEA116"}}>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star-half-stroke"></i>                                    </div>
                                    <a style={{marginTop:"10px"}}href="/" class="btn btn-dark">Read More</a>
                                </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div class="card" style={{width:"18rem"}}>
                                <div class="card-body">
                                    <h5 class="card-title">I am Tara Shekhar</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <div style={{fontSize:"25px", color:"#FEA116"}}>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    </div>
                                    <a style={{marginTop:"10px"}}href="/" class="btn btn-dark">Read More</a>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About