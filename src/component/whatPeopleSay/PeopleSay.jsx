import React from "react";
import "./peopleSay.css";
import Fade from "react-reveal/Fade";

const PeopleSay = () => {
  return (
    <section className="container people_say py-5">
      <Fade top>
        <div className=" text-center tool py-5 ">
          <h2 className="position-relative pb-3 header-color">
            WHAT PEOPLE SAY{" "}
          </h2>
        </div>
      </Fade>

      <div className="row justify-content-between ">
        <Fade left>
          <div className=" col-12 col-lg-6 d-flex people_card align-items-center p-2">
            <figure className="col-3">
              <img src="../../assets/team-2.jpg" className="w-75" alt="" />
            </figure>
            <div className="col-9">
              <h6 className="mb-0 header-color">PHIL SMITH,</h6>
              <small>PROJECT ANALYST, XTRAC</small>
              <p className="text-color-gray">
                It was taking my boss a full day to prepare for some meetings
                Thanks to Astro now it is done in minutes and more easy.
              </p>
            </div>
          </div>
        </Fade>
        {/* ............................ */}
        <Fade right>
          <div className=" col-12 col-lg-6 d-flex people_card align-items-center p-2">
            <figure className="col-3">
              <img src="../../assets/team-1.jpg" className="w-75" alt="" />
            </figure>
            <div className="col-9">
              <h6 className="mb-0 header-color">Jamie Chappell,</h6>
              <small>Creative Director</small>
              <p className="text-color-gray">
                With Astro, we save an estimated 50 hours per week that used to
                be spent answering email and attending check-in meetings.
              </p>
            </div>
          </div>
        </Fade>
        {/* ............................ */}
        <Fade bottom>
          <div className="col-12 col-lg-6 d-flex people_card m-auto mt-5 align-items-center p-2">
            <figure className="col-3">
              <img src="../../assets/team-4.jpg" className="w-75" alt="" />
            </figure>
            <div className="col-9">
              <h6 className="mb-0 header-color">Kyler Rose,</h6>
              <small>Marketing Services Manager</small>
              <p className="text-color-gray">
                Thanks to Astro I can interact with engineers directly and
                establish working relationships, and that collaboration has been
                extremely valuable
              </p>
            </div>
          </div>
        </Fade>
        {/* ............................ */}
      </div>
    </section>
  );
};

export default PeopleSay;
