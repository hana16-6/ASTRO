/* eslint-disable jsx-a11y/alt-text */
import Lottie from "reactjs-lottie";
import mob from "./assests/mob.json";
import attention from "./assests/attention.json";
import support from "./assests/quilty.json";
import inc from "./assests/imp.json";
import s from "./assests/support.json";
import "./notification.css";
function Notification() {
  return (
    <>
      <section className="notifi-section">
        <div className="container">
          <div className="row justify-content-evenly">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 p-5">
              <h1>The system will inform you about important events.</h1>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 img-header">
              <Lottie
                options={{
                  animationData: mob,
                }}
              />
            </div>
          </div>
        </div>
        {/*  */}
      </section>
      <div className="container notifi-content">
        <h2>Keep track of all the threads</h2>
        <p>
          Astro informs you about the end of the work phase, changes in the
          tasks, or a completed application form from a candidate.
        </p>
      </div>
      {/*  */}
      <div className="container mt-5">
        <div>
          <img
            className="w-100"
            src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/uploads/DanielleHassan/8ffddcb0-cfab-415b-888d-cae9e093953a_4_Communication.png"
          />
        </div>
      </div>
      {/*  */}
      <div className="container noti-content">
        <h3> All About Notification</h3>
        <div className="row justify-content-center align-items-center">
          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 height ">
            <Lottie
              className="w-100"
              options={{
                animationData: attention,
              }}
            />
            <h5 className="text-center heading"> Managing your attention</h5>
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 height ">
            <Lottie
              className="w-50"
              options={{
                animationData: support,
              }}
            />
            <h5 className="text-center heading">
              {" "}
              Supporting effective results
            </h5>
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12  height ">
            <Lottie
              className="w-75"
              options={{
                animationData: inc,
              }}
            />
            <h5 className="text-center heading">Increasing your output</h5>
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12  height ">
            <Lottie
              className="w-75"
              options={{
                animationData: s,
              }}
            />
            <h5 className="text-center heading">
              Decreasing your switching costs
            </h5>
          </div>
        </div>
      </div>
      <section className="footer-notifi mb-5">
        <div className="container">
          <h3>Why use Astro’s ?</h3>
          <p>
            with Astro response time is lower when you can communicate this way
            from a single interface. notification helps to reduce to wastes the
            time you need to be spending managing the situation,it’s easy to
            manage how every element of your organization.
          </p>
        </div>
      </section>
    </>
  );
}

export { Notification };
