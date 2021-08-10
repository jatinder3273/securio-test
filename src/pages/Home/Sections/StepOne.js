import React from 'react'

const StepOne = () => {
    return (
        <>
            <div className="Heading_Welcome">
                <h2>Welcome to Securio.</h2>
            </div>
            <form className="row col-lg-12  Form">
                <div className="form-group col-lg-4">
                    <label for="inputEmail4">First Name</label>
                    <input type="email" className="form-control" id="inputEmail4" />
                </div>
                <div className="form-group col-lg-4">
                    <label for="inputPassword4">Last Name</label>
                    <input type="password" className="form-control" id="inputPassword4" />
                </div>
            </form>
            <form className="row col-lg-12 Form">
                <div className="form-group col-lg-4">
                    <label for="inputEmail4">Date of Birth</label>
                    <input type="email" className="form-control" id="inputEmail4" />
                </div>
                <div className="form-group col-lg-4">
                    <label for="inputPassword4">Cite</label>
                    <input type="password" className="form-control" id="inputPassword4" />
                </div>
            </form>
            <form className="row col-lg-12 Form">
                <div className="form-group col-lg-4">
                    <label for="inputState"> State</label>
                    <select id="inputState" class="form-control">
                        <option selected>Select State</option>
                        <option>Selecy State</option>
                    </select>
                </div>
                <div className="form-group col-lg-4">
                    <label for="inputPassword4">No of Dependents</label>
                    <input type="password" className="form-control" id="inputPassword4" />
                </div>
            </form>
            <button href="StepTwo.js" className="Next_Button">Next Step</button>
        </>
    )
}

export default StepOne
