import React from "react";
import Moment from "react-moment";

const Job = ({ job, index, confirmDeleteModal, bgColor, date }) => {
  return (
    <div
      className="flex rounded-lg border col-gap-4 p-4 h-32 w-64 shadow-md text-white transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:shadow-xl"
      style={{ backgroundColor: `${bgColor}` }}
    >
      <div className="w-10 h-8 bg-white rounded-full text-gray-800 font-black text-xl font-serif text-center">
        {job.company[0]}
      </div>
      <div className="flex items-stretch flex-col text-left w-3/4">
        <h1 className="text-lg flex-1 font-bold ">{job.company}</h1>
        <p className="flex-1">{job.jobTitle}</p>

        <Moment
          className="text-xs flex-1 mt-4 text-gray-100 w-full self-end text-center"
          fromNow
        >
          {job.date}
        </Moment>
      </div>
      <div className="w-10 text-right ">
        <button onClick={() => confirmDeleteModal(index)}>
          <div className="w-8 text-gray-600 hover:opacity-100 hover:bg-gray-100 p-2 rounded-full ">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="far"
              data-icon="trash-alt"
              class="svg-inline--fa fa-trash-alt fa-w-14"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M268 416h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12zM432 80h-82.41l-34-56.7A48 48 0 0 0 274.41 0H173.59a48 48 0 0 0-41.16 23.3L98.41 80H16A16 16 0 0 0 0 96v16a16 16 0 0 0 16 16h16v336a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128h16a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16zM171.84 50.91A6 6 0 0 1 177 48h94a6 6 0 0 1 5.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12z"
              />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Job;
