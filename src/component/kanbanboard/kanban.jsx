import Lottie from "reactjs-lottie";
import animation from "./assests/kk.json";
import kanban from "./assests/kanbanb.json";
import trans from "./assests/trans.json";
import arr from "./assests/arr.json";
import Fade from "react-reveal/Fade";
import optimize from "./assests/opti.json";
import progess from "./assests/progess.json";
import "./kanban.css";
function Kanbanboard() {
  return (
    <>
      <section className="header-section">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 header-content">
              <h1 className="header-h">
                Continuous delivery starts on Astro kanban board
              </h1>
              <p className="header-p">
                Kanban is a common framework for agile that provides
                transparency of work and team capacity. Visualize your progress
                on digital Kanban boards and see your team move tasks from to-do
                to done.
              </p>

              <input type="button" className="header-btn" value="Get Start" />
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12">
              <Lottie
                options={{
                  animationData: animation,
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2 */}
      <Fade right>
        <div className="container mt-5">
          <div className="kanban-team">
            <h2 className="text-center">Astro kanban board for every team</h2>
            <p>
              Kanban boards give your team full visibility into what’s next, so
              when one work item is completed, the team can quickly move on to
              the next. Jira Software kanban boards are ideal for teams who
              practice agile methodologies
            </p>
          </div>
        </div>
      </Fade>
      {/* 3 */}
      <section className="kanban-is-board-section">
        <div className="container">
          <div className="row justify-content-around">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 h-50">
              <Lottie
                options={{
                  animationData: kanban,
                }}
              />
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 p-5 kanban-is-content ">
              <h3>what is Kanban board ?</h3>
              <p>
                You know that “do, doing, done,” board with all the sticky
                notes? Believe it or not, your coworker didn’t make that up.it
                is kanban board Astro board is the easiest way to go from idea
                to action. Plan projects and break down each step of the way to
                getting things done. Instantly see the status of every task and
                celebrate each accomplishment. Project management has never been
                so powerful that allows you to plot out projects and workflows
                using columns and cards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/*  */}
      <section>
        <div className="container mt-5">
          <div className="row justify-content-center align-items-center">
            <Fade left>
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 video-header">
                <h3> the Kanban system to handle any workflow</h3>
                <div className="arrow">
                  <Lottie
                    options={{
                      animationData: arr,
                    }}
                  />
                </div>
              </div>
            </Fade>
            <Fade right>
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                <iframe
                  loading="lazy"
                  className="video-kanban"
                  allowfullscreen=""
                  title="vimeo Video Player"
                  src="https://player.vimeo.com/video/236558214?color&amp;autopause=0&amp;muted=0&amp;
          title=1&amp;portrait=1&amp;byline=1#t="
                >
                  {/* data-rocket-lazyload="fitvidscompatible" data-ll-status="loaded" */}
                </iframe>
              </div>
            </Fade>
          </div>
        </div>
      </section>
      {/*  */}
      <section className="features-section">
        <div className="container why-div mt-5">
          <p>Why use Astro’s Kanban software?</p>
        </div>
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12  column feature">
              <div className="trans">
                <Lottie
                  options={{
                    animationData: trans,
                  }}
                />
              </div>
              <h5>Promote transparency </h5>
              <p>
                Having a single source of truth helps teams more effectively
                communicate. Kanban boards let teams know where work stands at a
                glance by displaying the most relevant information for each
                story, issue, bug, or task.
              </p>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 column feature">
              <div className="opti">
                <Lottie
                  options={{
                    animationData: optimize,
                  }}
                />
              </div>
              <h5> Optimize workflows</h5>
              <p>
                Kanban boards visually depict work at various stages. Jira
                Software kanban boards allow teams to define and configure
                workflows and can be as simple or as complex as needed.
              </p>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 column feature">
              <div className="opti">
                <Lottie
                  options={{
                    animationData: progess,
                  }}
                />
              </div>
              <h5>Easily spot bottlenecks</h5>
              <p>
                Work in progress (WIP) is the number of stories in each status
                at a time. Establishing WIP limits is vital to prevent
                bottlenecks so that issues flow smoothly through your workflow.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export { Kanbanboard };
