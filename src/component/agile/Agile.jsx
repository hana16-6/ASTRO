import React from "react";
import Fade from "react-reveal/Fade";

export const Agile = () => {
  return (
    <section className="container my-5">
      <div className="row align-items-center justify-content-between">
        <Fade left>
          <div className="col-12 col-xl-6 py-4 py-xl-0 text-center text-xl-start">
            <h3 className="header-color">POWER YOUR FAST, AGILE BUSINESS</h3>
            <p className="pt-2 pt-xl-5 text-color-gray">
              From Strategy to planning to execution, Clarizen provides
              configurable enterprise solution that support your entire work
              lifecycle
            </p>
          </div>
        </Fade>
        <Fade right>
          <div className="col-12 col-xl-5">
            <figure>
              <img
                src="../../assets/jak.svg"
                alt=""
                className="w-100 w-lg-50"
              />
            </figure>
          </div>
        </Fade>
      </div>
      <div></div>
    </section>
  );
};
