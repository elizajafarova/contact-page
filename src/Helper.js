import React from "react";

const Helper = (props) => {
  return (
    <>
      <section id="header" className="">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    <strong className="brand-name"> Eliza Jafarova </strong>
                  </h1>
                  <h2 className="my-3">
                    I'm a front-end developer. Right now, I'm working on
                    ReactJs.
                  </h2>
                  <div className="mt-3">
                    <a href="https://www.linkedin.com/in/eliza-jafarova-658a33201/" className="btn btn-dark">{props.btname}</a>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img src={props.imgSrc} alt="Helper img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Helper;
