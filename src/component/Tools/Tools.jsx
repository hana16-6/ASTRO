import React from "react";
import Fade from "react-reveal/Fade";
import "./tool.css";

export const Tools = () => {
  return (
    <section className="container py-5">
      <Fade top>
        <div className=" text-center tool py-4 ">
          <h2 className="position-relative pb-3 header-color ">
            A TOOL THAT ADAPTS TO YOUR NEEDS
          </h2>
          <p className="pt-4 text-color-gray">
            <span className="brink-pink-text">ASTRO</span> Project helps you
            stay in full control of all your projects and keep track of all the
            moving parts
          </p>
        </div>
      </Fade>
      {/* .................... */}
      <div className="row w-75 m-auto py-5 align-self-stretch mt-5 mt-lg-0 ">
        <Fade left>
          <div className="col-12 col-md-6 col-lg-3 my-2 my-xl-0 ">
            <div className="tool_card p-3 h-sm-auto">
              <figure className="d-flex justify-content-center" alt="">
                <img
                  src="../../assets/project-feattool1svg4444.svg"
                  className="w-75"
                  alt=""
                />
              </figure>
              <div>
                <h6 className="py-4 header-color ">Stay organised</h6>
                <p className="text-color-gray">
                  priorities, and assign them to your teammates to work on
                </p>
              </div>
            </div>
          </div>
        </Fade>
        {/* .................... */}
        <Fade bottom>
          <div className="col-12 col-md-6 col-lg-3 my-2 my-xl-0 pt-5 pt-md-0 mt-5 mt-md-0">
            <div className="tool_card tool_card2 p-3 h-sm-auto">
              <figure className="d-flex justify-content-center" alt="">
                <img src="../../assets/fair.svg" className="w-75" alt="" />
              </figure>
              <div>
                <h6 className="py-4 header-color">Manage all your tasks</h6>
                <p className="text-color-gray">
                  Bring multiple projects under the same roof to create a
                  single. actionable task list
                </p>
              </div>
            </div>
          </div>
        </Fade>

        {/* .................... */}
        <Fade top>
          <div className="col-12 col-md-6 col-lg-3 my-2 my-xl-0 pt-5 pt-lg-0 mt-5 mt-lg-0">
            <div className="tool_card tool_card3 p-3">
              <figure className="d-flex justify-content-center" alt="">
                <img
                  src="../../assets/project-feature-card-four (1).svg"
                  className="w-75"
                  alt=""
                />
              </figure>
              <div>
                <h6 className="py-4 header-color">
                  Centralize all your communication
                </h6>
                <p className="text-color-gray">
                  Share project plans. and files in a central hub, your project
                  management software
                </p>
              </div>
            </div>
          </div>
        </Fade>
        {/* .................... */}
        <Fade right>
          <div className="col-12 col-md-6 col-lg-3 my-2 my-xl-0 mt-5 pt-5 pt-lg-0 mt-lg-0 height-tool">
            <div className="tool_card tool_card4 p-3">
              <figure className="d-flex justify-content-center" alt="">
                <img src="../../assets/fair (1).svg" className="w-75" alt="" />
              </figure>
              <div>
                <h6 className="py-4 header-color ">
                  Never miss your deadlines
                </h6>
                <p className="text-color-gray">
                  Get automatic reminders when tasks and projects approach their
                  due dates
                </p>
              </div>
            </div>
          </div>
        </Fade>
        {/* .................... */}
      </div>
    </section>
  );
};
