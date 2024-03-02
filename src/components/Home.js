import React from 'react'

export default function Home() {
    return (
        <>
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://images.unsplash.com/photo-1544148103-0773bf10d330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D" class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5 style={{ color: "#FEA116", fontSize: "35px", fontWeight: "800", fontFamily: "sans-serif" }}>Enjoy Our Delicious Meal</h5>
                            <p style={{ fontSize: "20px" }}>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                        </div>
                    </div>

                </div>
            </div>
            <div className="container" style={{ marginTop: "30px" }}>
                <div className="row">
                    <div className="col-3">
                        <div class="card" style={{ width: "18rem" }}>
                            <i style={{ fontSize: "30px", color: "#FEA116 ", marginTop: "5px", padding:"10px"}} class="fa fa-3x fa-user-tie "></i>
                            <div class="card-body">
                                <h5 class="card-title">Master Chefs</h5>
                                <p class="card-text">Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div class="card" style={{ width: "18rem" }}>

                            <i style={{ fontSize: "30px", color: "#FEA116 ", marginTop: "5px", padding:"10px"}} className="fa fa-3x fa-utensils "></i>
                            <div class="card-body">
                                <h5 class="card-title">Quality Food </h5>
                                <p class="card-text">Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div class="card" style={{ width: "18rem" }}>

                            <i style={{ fontSize: "30px", color: "#FEA116 ", marginTop: "5px", padding:"10px" }} className="fa fa-3x fa-cart-plus "></i>
                            <div class="card-body">
                                <h5 class="card-title">Online Order</h5>
                                <p class="card-text">Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div class="card" style={{ width: "18rem" }}>

                            <i style={{ fontSize: "30px", color: "#FEA116 ", marginTop: "5px",padding:"10px"}} className="fa fa-3x fa-headset "></i>
                            <div class="card-body">
                                <h5 class="card-title">24/7 Service</h5>
                                <p class="card-text">Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container" style={{marginTop:"50px"}}>
            <h1 style={{ textAlign: 'center', color: "#FEA116", fontSize: "35px", fontWeight: "700", fontFamily: "sans-serif" }}>Our Master Chief  </h1>
                <div className="row" style={{marginTop:"20px"}}>
                    <div className="col-3">
                        <img style={{ borderRadius: "200px", height: "200px" }} src="https://themewagon.github.io/restoran/img/team-1.jpg" alt="ffghghgh" />
                    </div>
                    <div className="col-3">
                        <img style={{ borderRadius: "200px", height: "200px" }} src="https://themewagon.github.io/restoran/img/team-2.jpg" alt="ffghghgh" />
                    </div>
                    <div className="col-3">
                        <img style={{ borderRadius: "200px", height: "200px" }} src="https://themewagon.github.io/restoran/img/team-3.jpg" alt="ffghghgh" />
                    </div>
                    <div className="col-3">
                        <img style={{ borderRadius: "200px", height: "200px" }} src="https://themewagon.github.io/restoran/img/team-4.jpg" alt="ffghghgh" />
                    </div>
                </div>
            </div>

            <div className="container" style={{ marginTop: "50px" }}>
                <h1 style={{ textAlign: "center", color:"#FEA116" }}>Our Clients Say!!!</h1>
                <div className="row" style={{ marginTop: "20px" }}>
                    <div className="col-3">
                        <div class="card" style={{ width: "18rem" }}>
                            <i style={{ fontSize: "30px", color: "#FEA116 " }} className="fa fa-quote-left fa-2x"></i>
                            <div class="card-body">
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div class="card" style={{ width: "18rem" }}>
                            <i style={{ fontSize: "30px", color: "#FEA116 " }} className="fa fa-quote-left fa-2x "></i>
                            <div class="card-body">
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div class="card" style={{ width: "18rem" }}>
                            <i style={{ fontSize: "30px", color: "#FEA116 " }} className="fa fa-quote-left fa-2x "></i>
                            <div class="card-body">
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div class="card" style={{ width: "18rem" }}>
                            <i style={{ fontSize: "30px", color: "#FEA116 " }} className="fa fa-quote-left fa-2x "></i>
                            <div class="card-body">
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
