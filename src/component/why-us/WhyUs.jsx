import React from "react";
import Fade from "react-reveal/Fade";
import "./whyUs.css";
export const WhyUs = () => {
  return (
    <section className="container my-5 pb-4">
      <Fade top>
        <div className=" text-center py-2 w-xl-75 m-auto">
          <h2 className="position-relative pb-2 header-color">WHY US</h2>
          <p className="why-us-p pt-4 m-auto text-color-gray ">
            Because our app is the one place for all your projects and team
            collaboration With us you can get more work done faster, together.
            Whether it is about keeping your teams on the same page, or
            committing to deadlines and celebrating success, you and your team
            and clients can do it all under one roof, using one work management
            system.
          </p>
        </div>
      </Fade>
    </section>
  );
};
