import React, { useState, useEffect } from "react";
import JobForm from "./components/JobForm";
import Job from "./components/Job";
import ConfirmModal from "./components/ConfirmModal";

export default function App() {
  const [formIsShown, setFormIsShown] = useState(false);
  const [modalIsShown, setModalIsShown] = useState(false);
  const [jobIndex, setJobIndex] = useState({ jobIndex: "" });
  const [jobs, setJobs] = useState(() =>
    JSON.parse(window.localStorage.getItem("jobs") || [])
  );

  useEffect(() => {
    window.localStorage.setItem("jobs", JSON.stringify(jobs));
  }, [jobs]);

  const hex = [
    "#34495e",
    "#e74c3c",
    "#c0392b",
    "#2c3e50",
    "#e67e22",
    "#f39c12",
    "#16a085"
  ];

  const getRandomNumber = () => {
    return Math.floor(Math.random() * 7);
  };

  const formOpen = (index) => {
    setFormIsShown(true);
  };

  const formClose = () => {
    setFormIsShown(false);
  };

  const openModal = (index) => {
    let name = "jobIndex";
    setJobIndex({ ...jobIndex, [name]: index });
    setModalIsShown(true);
  };

  const closeModal = () => {
    setModalIsShown(false);
  };

  const addJob = (values) => {
    let hexColor = hex[getRandomNumber()];
    let company = values.company;
    let jobTitle = values.jobTitle;
    let date = new Date();
    const newJob = [...jobs, { company, jobTitle, hexColor, date }];
    console.log(jobs);
    setJobs(newJob);
    formClose();
  };

  const deleteJob = (e) => {
    let i = jobIndex.jobIndex;
    const newJob = [...jobs];
    newJob.splice(i, 1);
    setJobs(newJob);
    closeModal();
  };

  return (
    <div className="App">
      <ConfirmModal
        show={modalIsShown}
        deleteHandler={deleteJob}
        closeHandler={(e) => closeModal(e)}
      />

      <JobForm
        show={formIsShown}
        closeHandler={(e) => formClose(e)}
        addJob={addJob}
      />
      <div className="flex z-0 flex-col gap-3 items-center mt-20">
        <h1 className="text-xl font-bold font-sans ">WISHLIST</h1>
        <p className="text-gray-500">{jobs.length} JOBS</p>
        <button
          className=" w-64  border text-gray-400 text-3xl rounded-md shadow-sm"
          onClick={(e) => formOpen(e)}
        >
          +
        </button>

        {jobs.map((job) => (
          <Job
            bgColor={job.hexColor}
            key={job.index}
            index={job.index}
            date={job.date}
            job={job}
            confirmDeleteModal={openModal}
          />
        ))}
      </div>
    </div>
  );
}
