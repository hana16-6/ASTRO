import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import "./chat.css";
import letsChat from "../../images/lets-chat.json";
import Lottie from "reactjs-lottie";

function Chat() {
  return (
    <>
      <section className="my-5">
        <div className="container">
          <div className="row align-items-center">
            <Fade left>
              <div className="col-lg-6">
                <h1 className="mb-4">
                  Conversations are just a tap away with
                  <span className="brink-pink-text"> Astro</span>.
                </h1>
                <p className="text-color my-4">
                  An internal communication tool that makes direct messaging and
                  quick conversations with teams and clients easier and simpler.
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
                  className="w-100"
                  options={{
                    animationData: letsChat,
                  }}
                />
              </div>
            </Fade>
          </div>
        </div>
      </section>
      <section className="my-5">
        <div className="container">
          <Zoom>
            <div className="text-center">
              <h2 className="chat-app pb-3 h-color">
                Enjoy a clean and capable chat app
              </h2>

              <p className="py-4 text-color">
                <Typewriter
                  options={{
                    strings: [
                      `Astro Chat makes
                    enterprise communication easy, with a lightweight chat that’s
                    designed for conversational flow.`,
                    ],
                    autoStart: true,
                    loop: true,
                    pauseFor: 15000,
                    skipAddStyles: true,
                    delay: 30,
                  }}
                />
              </p>
            </div>
          </Zoom>
          <div className="row align-items-center">
            <Fade left>
              <div className="col-lg-6">
                <div className="mb-4">
                  <h3 className="h-color">
                    Start simple, flexible conversations
                  </h3>
                  <p className="text-color">
                    You can start a direct conversation with any coworker, or
                    create a group chat, inside a streamlined and easy-to-use
                    interface.
                  </p>
                </div>
                <div className="mb-5">
                  <h3 className="h-color">Find your chats faster</h3>
                  <p className="text-color">
                    <span className="brink-pink-text"> Astro</span> Chat is easy
                    to navigate. Your private and group chats live in separate
                    tabs, and they’re ordered by how recently they’ve received
                    an update
                  </p>
                </div>
                <p className="text-color">
                  You can also search for a conversation, so there’s no need to
                  scroll through lists.
                </p>
              </div>
            </Fade>
            <div className="col-lg-6 d-flex justify-content-center">
              <video className="chat-video" playsInline autoPlay muted loop>
                <source src="../../assets/chatVideo.mp4" type="video/mp4" />
              </video>
            </div>
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
                  src="../../assets/chat-attach-files.png"
                  alt=""
                />
              </div>
            </Fade>
            <Fade right>
              <div className="col-lg-6">
                <h3 className="h-color">Attach files</h3>
                <p className="text-color">
                  Share files, documents, images and more in chats, making the
                  most of Astro’s team communication tool.
                </p>
              </div>
            </Fade>
          </div>
        </div>
      </section>

      <section className="my-5">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <Fade left>
              <div className="col-lg-6">
                <h3 className="h-color">Use emojis</h3>
                <p className="text-color">
                  Use ProofHub emojis to say more with less, express comfortably
                  whenever short of words or even give feedback that’s to the
                  point. &#128525;👏
                </p>
              </div>
            </Fade>
            <Fade right>
              <div className="col-lg-5">
                <img
                  className="w-100"
                  src="../../assets/use-emojis.png"
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
export { Chat };
