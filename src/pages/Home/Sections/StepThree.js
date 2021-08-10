import React from "react";

const StepThree = () => {
  return (
    <>
      <div className="Heading_Welcome">
        <h2>Customer’s desired coverage options</h2>
      </div>
      <div className="First_Selection">
        <h5>Choose Coverage</h5>
      </div>
      <div class="row col-sm-12 col-md-12 col-lg-12">
        <div class="col-sm-3 col-md-4 col-lg-3">
          <div class="card mt-3">
            <div class="card-body radio-custom active">
              <label class="form-check-label" for=" Limit ">
              Coverage Limit of $10,000
                <input
                  class="form-check-input radio"
                  type="radio"
                  value=""
                  id=" Limit"
                  checked
                />
                <span className="checkmark"></span>
              </label>
            </div>
          </div>
        </div>
        <div class="col-sm-3 col-md-4 col-lg-3">
          <div class="card mt-3">
            <div class="card-body radio-custom ">
              <label class="form-check-label" for="Coverage">
              Coverage Limit of $25,000
                <input
                  class="form-check-input radio"
                  type="radio"
                  value=""
                  id="Coverage"
                />
                <span className="checkmark"></span>
              </label>
            </div>
          </div>
        </div>
      
        <div class="col-sm-3 col-md-4 col-lg-3">
          <div class="card mt-3">
            <div class="card-body radio-custom">
              <label class="form-check-label" for="CoverageLimit">
              Coverage Limit of $50,000
                <input
                  class="form-check-input radio"
                  type="radio"
                  value=""
                  id="CoverageLimit"                  
                />
                <span className="checkmark"></span>
              </label>
            </div>
          </div>
        </div>
      
      
      </div>
      <button className="Next_Button">Next Step</button>
    </>
  );
};

export default StepThree;
