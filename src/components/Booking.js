import React from 'react'



function Booking() {
    const Book_Table = () => {
        alert("Table Booked Succesfully !");
      }
    return (
        <>
            <div className="container">
                <div className="head">
                    <h1 style={{ fontSize: "35px", fontFamily: "monospace", textAlign: "center", marginTop: "20px", color: "#FEA116", fontWeight: "700" }}>Booking</h1><hr style={{ width: "10%", marginLeft: "44%" }} />
                </div>
                <div className="row">
                    <div className="col-6" style={{ marginTop: "80px" }}>
                        <img src="https://media.istockphoto.com/id/1285009750/photo/smiling-cheerful-couple-sitting-in-a-restaurant-having-dinner-and-chatting-man-talking-to-a.webp?b=1&s=170667a&w=0&k=20&c=0E_JGUM6uZzUSu5RGWrkpBWxfnOYiELbV0yJMGcmyMY=" alt="..." />
                    </div>
                    <div className="col-6">
                        <div className="formbold-main-wrapper">
                            <div className="formbold-form-wrapper">
                                <form action="https://formbold.com/s/FORM_ID" method="POST">
                                    <div className="flex flex-wrap formbold--mx-3">
                                        <div className="w-full sm:w-half formbold-px-3">
                                            <div className="formbold-mb-5">
                                                <label for="fName" className="formbold-form-label"> First Name </label>
                                                <input type="text" name="fName" id="fName" placeholder="First Name" className="formbold-form-input" />
                                            </div>
                                        </div>
                                        <div className="w-full sm:w-half formbold-px-3">
                                            <div className="formbold-mb-5">
                                                <label for="lName" className="formbold-form-label"> Last Name </label>
                                                <input type="text" name="lName" id="lName" placeholder="Last Name" className="formbold-form-input" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="formbold-mb-5">
                                        <label for="guest" className="formbold-form-label">
                                            How many guest are you bringing?
                                        </label>
                                        <input type="number" name="guest" id="guest" placeholder="5" className="formbold-form-input" />
                                    </div>

                                    <div className="flex flex-wrap formbold--mx-3">
                                        <div className="w-full sm:w-half formbold-px-3">
                                            <div className="formbold-mb-5 w-full">
                                                <label for="date" className="formbold-form-label"> Date </label>
                                                <input type="date" name="date" id="date" className="formbold-form-input" />
                                            </div>
                                        </div>
                                        <div className="w-full sm:w-half formbold-px-3">
                                            <div className="formbold-mb-5">
                                                <label for="time" className="formbold-form-label"> Time </label>
                                                <input type="time" name="time" id="time" className="formbold-form-input" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex formbold-mb-5">
                                        <div className="flex">
                                            <input type="radio" name="radio1" id="radioButton1" className="formbold-radio" />
                                            <label for="radioButton1" className="formbold-radio-label"> Yes </label>
                                        </div>
                                        <div className="flex">
                                            <input type="radio" name="radio1" id="radioButton2" className="formbold-radio" />
                                            <label for="radioButton2" className="formbold-radio-label"> No </label>
                                        </div>
                                    </div>
                                    <div>
                                        <button style={{ fontSize: "18px", fontWeight: "600" }} type="button" class="btn btn-warning" onClick={Book_Table}>Book A Table</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Booking