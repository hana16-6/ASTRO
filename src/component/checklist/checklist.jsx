import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import "./checkList.css";
import checkList from "../../images/check-list.json";
import Lottie from "reactjs-lottie";
function Checklist() {
  return (
    <>
      <section className="checkList mb-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <Fade left>
                <div>
                  <h2 className="h-color mb-4">
                    Your team have step by step processes which should be
                    followed
                  </h2>
                  <p className="text-color my-4">
                    A checklist is a way of keeping track of subtasks within a
                    card. You can add multiple checklists to a single card.
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
                  options={{
                    animationData: checkList,
                  }}
                />
              </div>
            </Fade>
          </div>
        </div>
      </section>
      <section className="checklist2 my-5 py-5">
        <div className="container">
          <div className="row align-items-center">
            <Fade left>
              <div className="col-lg-6">
                <img
                  className="w-100"
                  src="../../assets/board-checklists.png"
                  alt=""
                />
              </div>
            </Fade>
            <Zoom>
              <div className="col-lg-6">
                <h4 className="h-color mb-4">
                  Checklist templates are a very effective way of guiding staff
                  through a process and providing the information necessary.
                </h4>
                <h5 className="brink-pink-text my-3">
                  Checklist templates could be used
                </h5>
                <ul>
                  <li>Opening and Closing the office procedures</li>
                  <li>Can become your office handbook</li>
                  <li>Support during training</li>
                </ul>
              </div>
            </Zoom>
          </div>
        </div>
      </section>
      <section className="my-5">
        <div className="container">
          <div className="row align-items-center">
            <Fade left>
              <div className="col-lg-6">
                <h3 className="h-color mb-4">
                  Add one or more child items to a checklist
                </h3>
                <p className="text-color my-4">
                  tasks are added to the product Kanban board using the
                  checklist feature. You can use the same procedures to add any
                  other supported checklist item from your board.
                </p>
              </div>
            </Fade>
            <Fade right>
              <div className="col-lg-6">
                <img
                  className="w-100"
                  src="../../assets/checklist-child2.png"
                  alt=""
                />
              </div>
            </Fade>
          </div>
        </div>
      </section>
    </>
  );
}
export { Checklist };
