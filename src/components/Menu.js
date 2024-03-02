import React from 'react'

export default function Menu() {
  return (
    <>
  <div className="container">
                <div className="menu">
                    <h1 style={{ fontSize: "40px", fontFamily: "sans-serif", fontWeight: "800", textAlign: "center", marginTop: "25px" }}>Food Menu</h1><hr style={{ width: "22%", marginLeft: "37%" }} />
                    <h5 style={{ fontSize: "30px", fontWeight: "800", fontFamily: "monospace", textAlign: "center", marginTop: "20px", color:"#FEA116"}}>Most Popular Items</h5>
                </div>
                <div className="row" style={{ marginTop: "30px" }}>
                    <div className="col-3">
                        <div class="card" style={{ width: "18rem" }}>
                            <img src="https://plus.unsplash.com/premium_photo-1667682209935-b6c87cced668?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YnVyZ2VyfGVufDB8fDB8fHww" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Chicken Burger</h5>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore.</p>
                                <p class="card-text" style={{ color: "#FEA116", fontSize: "20px", fontWeight: "700" }}>$115</p>
                                <a href="/" class="btn btn-dark">Ckeck More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div class="card" style={{ width: "18rem" }}>
                            <img src="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGl6emElMjBzbGljZXxlbnwwfHwwfHx8MA%3D%3D" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Small Pizza</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi.</p>
                                <p class="card-text" style={{ color: "#FEA116", fontSize: "20px", fontWeight: "700" }}>$100</p>
                                <a href="/" class="btn btn-dark">Ckeck More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div class="card" style={{ width: "18rem" }}>
                            <img src="https://plus.unsplash.com/premium_photo-1671547330493-b07d377085ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGFzdGF8ZW58MHx8MHx8fDA%3D" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Pasta</h5>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore.</p>
                                <p class="card-text" style={{ color: "#FEA116", fontSize: "20px", fontWeight: "700" }}>$105</p>
                                <a href="/" class="btn btn-dark">Ckeck More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div class="card" style={{ width: "18rem" }}>
                            <img src="https://images.unsplash.com/photo-1602192103300-47e66756152e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG9tYXRvJTIwYnVyZ2VyfGVufDB8fDB8fHww" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Tomato Burger</h5>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore.</p>
                                <p class="card-text" style={{ color: "#FEA116", fontSize: "20px", fontWeight: "700" }}>$100</p>
                                <a href="/" class="btn btn-dark">Ckeck More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}
