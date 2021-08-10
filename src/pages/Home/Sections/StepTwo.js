import React from "react";

const StepTwo = () => {
  return (
    <>
      <div className="Heading_Welcome">
        <h2>Customer’s desired coverage options</h2>
      </div>
      <div className="First_Selection">
        <h5>First Selection</h5>
      </div>
      <div class="row col-sm-12 col-md-12 col-lg-12">
        <div class="col-sm-3 col-md-4 col-lg-3">
          <div class="card mt-3">
            <div class="card-body checkbox-custom active">
              <label class="form-check-label" for="Cyber">
                Cyber Extortion
                <input
                  class="form-check-input checkbox"
                  type="checkbox"
                  value=""
                  id="Cyber"
                  checked
                />
                <span className="checkmark"></span>
              </label>
            </div>
          </div>
        </div>
        <div class="col-sm-3 col-md-4 col-lg-3">
          <div class="card mt-3">
            <div class="card-body checkbox-custom">
              <label class="form-check-label" for="Fraud">
                Cyber Fraud
                <input
                  class="form-check-input checkbox"
                  type="checkbox"
                  value=""
                  id="Fraud"
                />
                <span className="checkmark"></span>
              </label>
            </div>
          </div>
        </div>
        <div class="col-sm-3 col-md-4 col-lg-3">
          <div class="card mt-3">
            <div class="card-body checkbox-custom">
              <label class="form-check-label" for="Breach">
                Cyber Breach of Privacy
                <input
                  class="form-check-input checkbox"
                  type="checkbox"
                  value=""
                  id="Breach"
                />
                <span className="checkmark"></span>
              </label>
            </div>
          </div>
        </div>
      </div>

      <div class="row col-sm-12 col-md-12 col-lg-12">
        <div class="col-sm-3 col-md-4 col-lg-3">
          <div class="card mt-3">
            <div class="card-body checkbox-custom">
              <label class="form-check-label" for="Bullying">
              Cyber Bullying
                <input
                  class="form-check-input checkbox"
                  type="checkbox"
                  value=""
                  id="Bullying"
                />
                <span className="checkmark"></span>
              </label>
            </div>
          </div>
        </div>
        <div class="col-sm-3 col-md-4 col-lg-3">
          <div class="card mt-4">
            <div class="card-body checkbox-custom">
              <label class="form-check-label" for=" Theft">
                    Identity Theft
                <input
                  class="form-check-input checkbox"
                  type="checkbox"
                  value=""
                  id=" Theft"
                />
                <span className="checkmark"></span>
              </label>
            </div>
          </div>
        </div>
        
        <div class="col-sm-3 col-md-4 col-lg-3">
        <div class="card mt-4">
          <div class="card-body checkbox-custom">
            <label class="form-check-label" for="Restoration">
            Electronic Data Restoration
              <input
                class="form-check-input checkbox"
                type="checkbox"
                value=""
                id="Restoration"
              />
              <span className="checkmark"></span>
            </label>
          </div>
        </div>
      </div>
      </div>
      <div className="row col-sm-12 col-md-12 col-lg-12">
      <div class="col-sm-3 col-md-4 col-lg-3">
      <div class="card mt-4">
        <div class="card-body checkbox-custom">
          <label class="form-check-label" for="Device">
          Electronic Device Replacement
            <input
              class="form-check-input checkbox"
              type="checkbox"
              value=""
              id="Device"
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

export default StepTwo;
