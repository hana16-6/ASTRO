import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import viewboardPic from "../../images/board-design-strategy.json";
import Lottie from "reactjs-lottie";
import "./viewboard.css";
function Viewboard() {
  return (
    <>
      <section className="viewboard-color mb-5">
        <div className="container">
          <div className="row align-items-center">
            <Fade left>
              <div className="col-lg-6">
                <h1 className="mb-4">
                  Give work a new look with
                  <span className="brink-pink-text"> Astro</span> views.
                </h1>
                <p className="text-color my-4">
                  See your projects from every angle with Board, Kanban and
                  Table views that will bring a fresh perspective to the task at
                  hand.
                </p>
                <Fade bottom>
                  <button type="button" className="btn shadow btn2-hover">
                    <Link
                      className="btn-link text-decoration-none "
                      to="/SignUp"
                    >
                      Start For free
                    </Link>
                  </button>
                </Fade>
              </div>
            </Fade>
            <Fade right>
              <div className="col-lg-6">
                <Lottie
                  className="w-75"
                  options={{
                    animationData: viewboardPic,
                  }}
                />
              </div>
            </Fade>
          </div>
        </div>
      </section>
      <section className="my-5">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <Fade left>
              <div className="col-lg-5">
                <img className="w-100" src="../../assets/77.jpg" alt="" />
              </div>
            </Fade>
            <Fade right>
              <div className="col-lg-6">
                <h3 className="h-color">
                  Success starts with a
                  <span className="brink-pink-text"> Astro</span> board
                </h3>
                <p className="text-color">
                  Similar to a Kanban board, Astro board is the easiest way to
                  go from idea to action. Plan projects and break down each step
                  of the way to getting things done. Instantly see the status of
                  every task and celebrate each accomplishment. Project
                  management has never been so powerful
                </p>
              </div>
            </Fade>
          </div>
        </div>
      </section>
      <section className="viewboard-color my-5">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <Fade left>
              <div className="col-lg-6">
                <h3 className="h-color">
                  Use Calendar to stay on top of tasks
                </h3>
                <p className="text-color">
                  Start each day without any surprises. Whether scheduling a
                  quarterly editorial calendar or staying on top of your to-dos,
                  Calendar is like a crystal ball giving you a clear vision of
                  what work lies ahead. Plus, Calendar can be synced with third
                  party calendars to help maintain the perfect work-life
                  balance.
                </p>
              </div>
            </Fade>
            <Fade right>
              <div className="col-lg-5">
                <img className="w-100" src="../../assets/19962.png" alt="" />
              </div>
            </Fade>
          </div>
        </div>
      </section>

      <section className="my-5">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <Fade left>
              <div className="col-lg-5">
                <img className="w-100" src="../../assets/19196978.jpg" alt="" />
              </div>
            </Fade>
            <Fade right>
              <div className="col-lg-6">
                <h3 className="h-color">
                  See it like a spreadsheet with Table
                </h3>
                <p className="text-color">
                  Dial in on all of the work that is happening across your team
                  with the team Table view and Add cards from team boards within
                  Table to see exactly what you need to see.
                </p>
              </div>
            </Fade>
          </div>
        </div>
      </section>
    </>
  );
}
export { Viewboard };
