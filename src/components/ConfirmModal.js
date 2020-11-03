import React from "react";

export default function ConfirmModal({ show, deleteHandler, closeHandler }) {
  const toggleClassName = show ? "visible" : "invisible";

  return (
    <div
      className={
        "z-10 fixed w-full h-full bg-purple-900 bg-opacity-75 text-center top-0 left-0 flex justify-center " +
        toggleClassName
      }
    >
      <div className="bg-white w-64 h-64 p-4 border rounded mt-12 shadow-lg">
        <h2 className="mb-4 text-2xl">Delete Job</h2>
        <p>Are you sure you want to delete this job?</p>
        <button
          className="bg-red-600 text-white py-2 mt-12 mr-2 w-20 rounded-lg"
          onClick={deleteHandler}
        >
          Delete
        </button>
        <button
          className="bg-purple-400 text-white py-2 mt-12 ml-2 w-20 rounded-lg"
          onClick={closeHandler}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
