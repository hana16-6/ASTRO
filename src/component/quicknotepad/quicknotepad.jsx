import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import notepad from "../../images/content-writing.json";
import notes from "../../images/notes-animation.json";
import notes2 from "../../images/web.json";
import Lottie from "reactjs-lottie";
import "./quicknotepad.css";

function Quicknotepad() {
  return (
    <>
      <section className="quicknotepad mb-5 py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <Fade left>
                <div>
                  <h1 className="h-color mb-4">
                    Why Should You Take Notes in a Meeting?
                  </h1>
                  <p className="text-color my-4">
                    Good note-taking will improve your active listening,
                    comprehension of material, and retention. Taking notes on
                    both synchronous and asynchronous material will help you
                    better remember what you hear and see.
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
                  className="w-75"
                  options={{
                    animationData: notepad,
                  }}
                />
              </div>
            </Fade>
          </div>
        </div>
      </section>
      <section className="my-5 py-5">
        <div className="container">
          <div className="row align-items-center">
            <Fade left>
              <div className="col-lg-6">
                <Lottie
                  className="w-75"
                  options={{
                    animationData: notes,
                  }}
                />
              </div>
            </Fade>
            <Fade right>
              <div className="col-lg-6">
                <h3 className="h-color mb-4">
                  Taking Notes Promotes Active Listening
                </h3>
                <p className="text-color my-4">
                  NOTE-TAKING is one way to enhance listening, and using a
                  systematic approach to the taking and reviewing of your notes
                  can add immeasurably to your understanding and remembering of
                  the content of meetings.
                </p>
              </div>
            </Fade>
          </div>
        </div>
      </section>
      <section className="quicknotepad my-5 py-5">
        <div className="container">
          <div className="row align-items-center">
            <Fade left>
              <div className="col-lg-6">
                <h3 className="h-color mb-4">Only write down what matters.</h3>
                <p className="text-color my-4">
                  There’s nothing worse than finding random sheets of paper
                  stashed in different notebooks, drawers and bags, and
                  wondering what they refer to. Good note-taking takes time to
                  recopy your notes each evening saves time later when it comes
                  to studying for the actual test.
                </p>
              </div>
            </Fade>
            <Fade right>
              <div className="col-lg-6">
                <Lottie
                  className="w-75"
                  options={{
                    animationData: notes2,
                  }}
                />
              </div>
            </Fade>
          </div>
        </div>
      </section>
    </>
  );
}

export { Quicknotepad };
