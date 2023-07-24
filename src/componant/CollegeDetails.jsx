import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const CollegeDetails = () => {
  const detailsData = useLoaderData();

  return (
    <div>
      <h1 className="font-semibold text-4xl text-center mt-5 mb-8">
        {detailsData.collegeName}
      </h1>
      <div>
        <img
          className="w-[850px] h-[450px] mx-auto rounded-xl shadow-xl mb-16"
          src={detailsData.Image}
          alt="college pic"
        />
      </div>

      <div className="flex w-[70%] mx-auto justify-evenly items-center ">
      <div className=" text-xl">
        <p className="text-3xl font-bold mb-3">
          Name: {detailsData.collegeName}
        </p>
        <p>Location: {detailsData.location}</p>
        <p>Established in {detailsData.establish}</p>
        <p>Principal: {detailsData.principal}</p>
        <p className="mt-3 mb-6">
          Website:{" "}
          <span className="text-blue-700 font-semibold ">
            {detailsData.website}
          </span>
        </p>
      </div>
      <div className="text-center p-4 bg-slate-100 rounded-xl shadow-lg hover:shadow-xl hover:bg-slate-200">
        <p className="font-bold text-4xl">{detailsData.currentStudent}</p>
        <p className="font-medium text-2xl">Current student</p>
      </div>
      </div>

      <p className="w-[70%] mx-auto text-xl mb-10">About: {detailsData.about}</p>
    </div>
  );
};

export default CollegeDetails;
