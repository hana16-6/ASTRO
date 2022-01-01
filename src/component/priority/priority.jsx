/* eslint-disable react/style-prop-object */
import Lottie from "reactjs-lottie";
import pro from "./assests/pro.json";
import power from "./assests/power.json";
import ppp from "./assests/ppp.json";
import sign from "./assests/sign.json";
import search from "./assests/searchs.json";
import "./priority.css";
function Priority() {
  return (
    <>
      <section className="header-priority">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 priority">
              <h1>Use Task Priorities To Clearly Plan Next Steps</h1>
              <p>
                Card Priority by Screenful is a free Power-Up that allows you to
                set priorities and sort cards according to their importance. You
                can configure the names of the priority levels. The cards with
                the highest priority display a red badge in the card front so
                that you can quickly see which cards need most urgent attention.
              </p>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12">
              <div className="">
                <Lottie
                  options={{
                    animationData: pro,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container mt-5">
        <div className="priority-video col-xxl-12 col-xl-12 xol-lg-12 col-md-6 col-sm-6">
          <img
            src="https://www.ntaskmanager.com/wp-content/themes/ntask-website/images/kanban_img_2.svg"
            alt="Prioritizing Tasks with Kanban | Kanbanize"
            jsname="HiaYvf"
            jsaction="load:XAeZkd;"
            style={{ width: "40rem" }}
            data-noaft="1"
          ></img>
        </div>
      </div>
      {/*  */}
      <div className="container priority-intro">
        <h1>Not all cards are created equal. Prioritise them!</h1>
      </div>
      {/*  */}
      <section className="priority-content-section">
        <div className="container priority-content">
          <div className="row justify-content-evenly align-items-center">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12">
              <h3>1 Add the Card Priority Power‑Up to your board</h3>
              <p>
                You can activate this add-on from the Power‑Ups section in the
                Atsro menu. Just go to the Board Utilities category, scroll down
                to Card Priority by Astro and add it to your board by clicking
                the Add button.
              </p>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 w-25">
              <Lottie options={{ animationData: ppp }} />
            </div>
          </div>
        </div>
        {/* 2 */}
        <div className="container priority-content">
          <div className="row justify-content-evenly align-items-center">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 w-25">
              <Lottie
                options={{
                  animationData: power,
                }}
              />
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12">
              <h3>2 Set your priority levels</h3>
              <p>
                Set names for your priority levels . The default priorities are
                Highest, Critical, Alarming, Act soon, and Lowest. The name of
                the priority is shown in the card front and back.
              </p>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="container priority-content">
          <div className="row justify-content-evenly align-items-center">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12">
              <h3>3 Assign priorities to tasks</h3>
              <p>
                To assign an priority for a card, simply click 'Card Priority'
                from the right menu, and select the priority from the list of
                pre-defined priorities.
              </p>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 w-25">
              <Lottie
                options={{
                  animationData: sign,
                }}
              />
            </div>
          </div>
        </div>

        {/*  */}
        <div className="container priority-content">
          <div className="row justify-content-around align-items-center">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 w-25">
              <Lottie
                options={{
                  animationData: search,
                }}
              />
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12">
              <h3>4 See priority in card front and back</h3>
              <p>
                Depending on your settings, the set priority is shown in the
                card front and card back. You can quickly see which cards need
                your most urgent attention.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export { Priority };
