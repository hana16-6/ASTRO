import React from "react";
import { Link } from "react-router-dom";
import "./pricing.css";

const Pricing = () => {
  return (
    <section className="plan my-5">
      <div className="container">
        <h2 className="text-center fs-2 fw-bold lh-base pricing-header">
          Select A Suitable <span className="text-pro">Plan</span>
        </h2>

        <div className="row text-center text-md-start mt-5">
          <div className=" text-center col-lg mb-4">
            <div className="item3 item-style">
              <h3 className="fw-bold pricing-header">Basic</h3>
              <p className="pricing-header">Best for personal use</p>
              <span className="text-danger">$0</span>

              <ul className="list-unstyled mt-3">
                <li>Kanban Boards</li>
                <li>Email in Astro</li>
                <li>Real-Time Chat</li>
                <li>Unlimited Members</li>
              </ul>
              <div className="main-blue-button-hover">
                <Link className="btn-link text-decoration-none " to="/SignUp">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
          <div className=" text-center col-lg mb-4">
            <div className="item3 item-style">
              <h3 className="fw-bold pricing-header">Premium</h3>
              <p className="pricing-header">Best for small teams</p>
              <span className="text-danger">$10.99</span>
              <ul className="list-unstyled mt-3">
                <li>Advanced Dashboard Features</li>
                <li>Goal Folders</li>
                <li>Timelines & Mind Maps</li>
                <li>Advanced Time Tracking</li>
              </ul>
              <div className="main-blue-button-hover">
                <Link className="btn-link text-decoration-none " to="/SignUp">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
          <div className=" text-center col-lg mb-4">
            <div className="item3 item-style">
              <h3 className="fw-bold pricing-header">Business</h3>
              <p className="pricing-header">Best for multiple teams</p>
              <span className="text-danger">$24.99</span>
              <ul className="list-unstyled mt-3">
                <li>Team Sharing</li>
                <li>Subtasks in Multiple Lists</li>
                <li>Priority Support</li>
                <li>Custom Permissions</li>
              </ul>
              <div className="main-blue-button-hover">
                <Link className="btn-link text-decoration-none " to="/SignUp">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
