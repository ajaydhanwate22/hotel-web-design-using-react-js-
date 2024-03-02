import React from 'react'

function Team() {
    return (
        <>
            <div className="container">
                <div className="head">
                    <h1 style={{ fontSize: "35px", fontFamily: "monospace", textAlign: "center", marginTop: "20px", color: "#FEA116", fontWeight: "700" }}>Our Master Chefs</h1><hr style={{ width: "25%", marginLeft: "35%" }} />
                </div>
                <div className="row">
                    <div className="col-3 master_chief">
                        <img style={{ height: "270px", widows: "270px" }} className='rounded-circle' src="https://themewagon.github.io/restoran/img/team-1.jpg" alt="" />
                        <h5 style={{ textAlign: "center", marginTop: "10px" }}>Jessica Wilkerson</h5>
                        <p style={{ textAlign: "center" }}>Pantry cook</p>
                    </div>
                    <div className="col-3 master_chief">
                        <img style={{ height: "270px", widows: "270px" }} className='rounded-circle' src="https://themewagon.github.io/restoran/img/team-2.jpg" alt="" />
                        <h5 style={{ textAlign: "center", marginTop: "10px" }}>Luella Sherman</h5>
                        <p style={{ textAlign: "center" }}> Dishwasher</p>
                    </div>
                    <div className="col-3 master_chief">
                        <img style={{ height: "270px", widows: "270px" }} className='rounded-circle' src="https://themewagon.github.io/restoran/img/team-3.jpg" alt="" />
                        <h5 style={{ textAlign: "center", marginTop: "10px" }}>Henry Warren</h5>
                        <p style={{ textAlign: "center" }}> Fry cook</p>
                    </div>
                    <div className="col-3 master_chief">
                        <img style={{ height: "270px", widows: "270px" }} className='rounded-circle' src="	https://themewagon.github.io/restoran/img/team-4.jpg" alt="" />
                        <h5 style={{ textAlign: "center", marginTop: "10px" }}>Kylen Shannon</h5>
                        <p style={{ textAlign: "center" }}> Food runner</p>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-3 master_chief">
                        <img style={{ height: "270px", widows: "270px" }} className='rounded-circle' src="https://themewagon.github.io/restoran/img/team-3.jpg" alt="" />
                        <h5 style={{ textAlign: "center", marginTop: "10px" }}>Henry Warren</h5>
                        <p style={{ textAlign: "center" }}> Fry cook</p>
                    </div>
                    <div className="col-3 master_chief">
                        <img style={{ height: "270px", widows: "270px" }} className='rounded-circle' src="https://themewagon.github.io/restoran/img/team-1.jpg" alt="" />
                        <h5 style={{ textAlign: "center", marginTop: "10px" }}>Jessica Wilkerson</h5>
                        <p style={{ textAlign: "center" }}>Pantry cook</p>
                    </div>
                    <div className="col-3 master_chief">
                        <img style={{ height: "270px", widows: "270px" }} className='rounded-circle' src="	https://themewagon.github.io/restoran/img/team-4.jpg" alt="" />
                        <h5 style={{ textAlign: "center", marginTop: "10px" }}>Kylen Shannon</h5>
                        <p style={{ textAlign: "center" }}> Food runner</p>
                    </div>
                    <div className="col-3 master_chief">
                        <img style={{ height: "270px", widows: "270px" }} className='rounded-circle' src="https://themewagon.github.io/restoran/img/team-2.jpg" alt="" />
                        <h5 style={{ textAlign: "center", marginTop: "10px" }}>Luella Sherman</h5>
                        <p style={{ textAlign: "center" }}> Dishwasher</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Team