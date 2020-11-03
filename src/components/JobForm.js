import React, { useState } from "react";

export default function JobForm({ addJob, show, closeHandler }) {
  const toggleClassName = show ? "visible" : "invisible";
  const [values, setValues] = useState({
    company: "",
    jobTitle: ""
  });

  const handleSubmit = e => {
    e.preventDefault();
    if (!values.company && !values.jobTitle) return;
    addJob(values);
    setValues({
      company: "",
      jobTitle: ""
    });
  };

  const onChangeHandler = e => {
    let name = e.target.name;
    let value = e.target.value;
    setValues({ ...values, [name]: value });
  };

  return (
    <div
      className={
        "z-10 fixed w-full h-full bg-purple-900 bg-opacity-75 text-center top-0 left-0 flex justify-center " +
        toggleClassName
      }
    >
      <form onSubmit={handleSubmit}>
        <div className="bg-white w-64 h-64 p-4 border rounded mt-12 shadow-lg">
          <h2 className="mb-4 text-2xl">Add a Job</h2>
          <input
            type="text"
            name="company"
            className="bg-white p-2 rounded-md mb-2 hover:bg-white hover:border-gray-300 border focus:border-purple-500 focus:bg-white "
            value={values.company}
            placeholder="Company Name"
            onChange={onChangeHandler}
          />
          <input
            type="text"
            name="jobTitle"
            className="bg-white p-2 rounded-md  hover:bg-white hover:border-gray-300 border focus:border-purple-500 focus:bg-white"
            value={values.jobTitle}
            placeholder="Job Title"
            onChange={onChangeHandler}
          />
          <input
            type="submit"
            value="Continue"
            className="rounded-lg bg-purple-600 text-white px-4 w-56 py-2 mt-4"
            onClick={closeHandler}
          />
        </div>
      </form>
    </div>
  );
}
