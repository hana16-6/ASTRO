import React from "react";
import { Link } from "react-router-dom";
import "./manage.css";
export const Manage = () => {
  return (
    <section className="manage d-flex align-items-center section__margin">
      <div className="row justify-content-around align-items-center container m-auto ">
        <div className="col-lg-8 col-md-8 col-7 text-start  ">
          <h3>MANAGE PROJECT BETTER START TODAY</h3>
        </div>
        <div className="col-lg-4 col-md-4 col-5 text-end">
          <button type="button" className="btn shadow btn2-hover btn-lg">
            <Link className="btn-link text-decoration-none " to="/SignUp">
              Get Start Now
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
};
