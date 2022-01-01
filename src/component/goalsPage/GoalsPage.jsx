import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import goal from "../../images/goalss.json";
import goalss2 from "../../images/goal-achieved.json";
import business from "../../images/business-goal.json";
import editor from "../../images/editor.json";
import Lottie from "reactjs-lottie";
import "./goalsPage.css";
function GoalsPage() {
  return (
    <>
      <section className="goals mb-5 py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <Fade left>
                <div>
                  <h1 className="h-color mb-4">Why Set Goals?</h1>
                  <p className="text-color my-4">
                    Top-level athletes, successful businesspeople and achievers
                    in all fields all set goals. Setting goals gives you
                    long-term vision and short-term motivation . It focuses your
                    acquisition of knowledge, and helps you to organize your
                    time and your resources so that you can make the most of
                    your life.
                  </p>
                </div>
              </Fade>
              <Fade bottom>
                <button type="button" className="btn shadow btn2-hover">
                  <Link className="btn-link text-decoration-none " to="/SignUp">
                    Start For free
                  </Link>
                </button>
              </Fade>
            </div>
            <Fade right>
              <div className="col-lg-6 d-flex justify-content-center">
                <Lottie
                  className="w-100"
                  options={{
                    animationData: goal,
                  }}
                />
              </div>
            </Fade>
          </div>
        </div>
      </section>

      <section className=" mb-5 py-5">
        <div className="container">
          <div className="row align-items-center">
            <Fade left>
              <div className="col-lg-6 d-flex justify-content-center">
                <Lottie
                  className="w-75"
                  options={{
                    animationData: goalss2,
                  }}
                />
              </div>
            </Fade>
            <div className="col-lg-6">
              <Fade right>
                <div>
                  <h3 className="h-color mb-4">What are Business Goals?</h3>
                  <p className="text-color my-4">
                    Goals typically represent a company's larger purpose and
                    work to establish an end-goal for employees to work toward.
                    Business goals do not have to be specific or have clearly
                    defined actions. Instead, business goals are broad outcomes
                    that the company wishes to achieve.
                  </p>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </section>

      <section className="goals mb-5 py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <Fade left>
                <div>
                  <h3 className="h-color mb-4">
                    Why are business goals important?
                  </h3>
                  <p className="text-color my-4">
                    Setting business goals is a best practice for a reason—goals
                    help drive businesses in the right direction. Here are a few
                    more reasons why companies take the time to establish strong
                    goals.
                  </p>
                </div>
              </Fade>
            </div>
            <Fade right>
              <div className="col-lg-6 d-flex justify-content-center">
                <Lottie
                  className="w-75"
                  options={{
                    animationData: business,
                  }}
                />
              </div>
            </Fade>
          </div>
        </div>
      </section>

      <section className=" mb-5 py-5">
        <div className="container">
          <div className="row align-items-center">
            <Fade left>
              <div className="col-lg-6 d-flex justify-content-center">
                <Lottie
                  className="w-75"
                  options={{
                    animationData: editor,
                  }}
                />
              </div>
            </Fade>
            <div className="col-lg-6">
              <Fade right>
                <div>
                  <h3 className="h-color mb-4">Keep teams aligned</h3>
                  <p className="text-color my-4">
                    A key benefit of using business goals is to align teams
                    towards a common goal. Establishing clear business
                    objectives allows team leaders to define which tactics their
                    individual teams should use to achieve these goals.
                  </p>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export { GoalsPage };
