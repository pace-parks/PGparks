import React, { useState } from 'react';

const Test = () => {
    const [validated, setValidated] = useState(false);
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        if(form.checkValidity() === false){
            event.stopPropagation();
        }
        setValidated(true);
    }
    const style = {   
            "backgroundColor": "rgb(217, 231, 216)",
            "padding": "30px",
            "borderRadius": "8px",
            "boxShadow": "0 0 10px rgba(26, 26, 26, 0.1)",
            "marginBottom": "60px",      
    }

    return (
        <div className="container mt-4" style={style}>
            <h3>Below is a Form that Validates the User Input</h3> <hr/>
            <form className={`row g-3 needs-validation ${validated ? 'was-validated': ''}`} onSubmit={handleSubmit} noValidate>
                <div className="col-md-4">
                    <label  className="form-label">First name</label>
                    <input type="text" className="form-control" id="validationCustom01" value="Mark" required />
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                </div>
                <div className="col-md-4">
                    <label  className="form-label">Last name</label>
                    <input type="text" className="form-control" id="validationCustom02" value="Otto" required />
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                </div>
                <div className="col-md-4">
                    <label  className="form-label">Username</label>
                    <div className="input-group has-validation">
                        <span className="input-group-text" id="inputGroupPrepend">@</span>
                        <input type="text" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
                        <div className="invalid-feedback">
                            Please choose a username.
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <label  className="form-label">City</label>
                    <input type="text" className="form-control" id="validationCustom03" required />
                    <div className="invalid-feedback">
                        Please provide a valid city.
                    </div>
                </div>
                <div className="col-md-3">
                    <label  className="form-label">State</label>
                    <select className="form-select" id="validationCustom04" required>
                        <option selected disabled value="">Choose...</option>
                        <option>...</option>
                    </select>
                    <div className="invalid-feedback">
                        Please select a valid state.
                    </div>
                </div>
                <div className="col-md-3">
                    <label  className="form-label">Zip</label>
                    <input type="text" className="form-control" id="validationCustom05" required />
                    <div className="invalid-feedback">
                        Please provide a valid zip.
                    </div>
                </div>
                <div className="col-12">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                        <label className="form-check-label" htmlFor="invalidCheck">
                            Agree to terms and conditions
                        </label>
                        <div className="invalid-feedback">
                            You must agree before submitting.
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <button className="btn btn-primary" type="submit" style={{backgroundColor: "hsl(156deg 19.53% 31.74%)"}}>Submit form</button>
                </div>
            </form>

        </div>
    )

}

export default Test;