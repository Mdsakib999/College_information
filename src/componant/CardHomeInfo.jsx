import React from "react";
import { Link } from "react-router-dom";

const CardHomeInfo = () => {
  return (
    <div>
      <h1 className="font-semibold text-4xl  my-5 text-center">
        Some Featured Collage's
      </h1>

      <div className="lg:flex justify-evenly gap-4 mt-12 mb-20">

        <div className="card w-96 bg-base-100 shadow-xl hover:shadow-2xl">
          <figure>
            <img
              src="https://upload.wikimedia.org/wikipedia/en/5/54/Chittagong_College_logo.png"
              alt="Ctg College"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Chittagong College</h2>
            <p>Established: 1869</p>
            <p>Location: Chawkbazar, Chittagong,</p>
            <p>Current Student: 18000+</p>
            <div className="card-actions justify-start">
            <Link className="btn btn-primary" to="/allColleges">View All</Link>
            </div>
          </div>
        </div>

        <div className="card w-96 bg-base-100 shadow-xl hover:shadow-2xl">
          <figure>
            <img
              src="https://upload.wikimedia.org/wikipedia/en/9/97/Mohsin_College_Logo.jpg"
              alt="Mohsin clg"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Govt. Hazi Muhammad Mohsin College</h2>
            <p>Established: 1874</p>
            <p>Location: Chawkbazar, Chittagong,</p>
            <p>Current Student: 20000+</p>
            <div className="card-actions justify-center">
            <Link className="btn btn-primary" to="/allColleges">View All</Link>
            </div>
          </div>
        </div>

        <div className="card w-96 bg-base-100 shadow-xl hover:shadow-2xl">
          <figure>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/3/37/Gcc.chittagonj-01.svg"
              alt="City clg"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Government City College</h2>
            <p>Established: 1954</p>
            <p>Location: New Market, Chittagong-4000</p>
            <p>Current Student: 16000+</p>
            <div className="card-actions justify-end">
              
              <Link className="btn btn-primary" to="/allColleges">View All</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardHomeInfo;
