import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import mentionPic from "../../images/content-marketing.json";
import mentionPic2 from "../../images/social-media.json";
import mentionPic3 from "../../images/problem-solving-team.json";
import Lottie from "reactjs-lottie";
import "./mention.css";
function Mention() {
  return (
    <>
      <section className="mention-color  mb-5">
        <div className="container">
          <div className="row align-items-center">
            <Fade left>
              <div className="col-lg-6">
                <h1 className="mb-4">
                  <span className="brink-pink-text"> Astro</span> boards are the
                  perfect way to connect and collaborate on work.
                </h1>
                <p className="text-color my-4">
                  adding new members to collaborate on tasks, Astro makes every
                  step a piece of cake. it makes it clear who you are talking
                  to, especially when there are several collaborators involved,
                  and if you have several times the same firstname.
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
                    animationData: mentionPic,
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
                <img
                  className="w-100"
                  src="../../assets/announcement.png"
                  alt=""
                />
              </div>
            </Fade>
            <Fade right>
              <div className="col-lg-6">
                <h3 className="h-color">Add comments</h3>
                <p className="text-color">
                  Add comments to announcements to share your thoughts and
                  collaborate over them.
                </p>
              </div>
            </Fade>
          </div>
        </div>
      </section>

      <section className="mention-color my-5">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <Fade left>
              <div className="col-lg-6">
                <h3 className="h-color">
                  Monitor mentions of your board in real-time
                </h3>
                <p className="text-color">
                  mentioning someone that is already a collaborator is also a
                  way to save a tiny bit of the energy required to check if that
                  person was already a collaborator.
                </p>
              </div>
            </Fade>
            <Fade right>
              <div className="col-lg-5">
                <Lottie
                  className="w-100"
                  options={{
                    animationData: mentionPic2,
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
                <Lottie
                  className="w-100"
                  options={{
                    animationData: mentionPic3,
                  }}
                />
              </div>
            </Fade>
            <Fade right>
              <div className="col-lg-6">
                <h3 className="h-color">
                  <span className="brink-pink-text"> @mentions</span> :Just
                  reach out once
                </h3>
                <p className="text-color">
                  Ifyou want to ping someone about an issue, but don't feel like
                  they need ongoing notifications, mentions are a perfect
                  solution.
                </p>
              </div>
            </Fade>
          </div>
        </div>
      </section>
    </>
  );
}

export { Mention };
