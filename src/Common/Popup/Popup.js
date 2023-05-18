import React from "react";

function Popup({ popup, setPopup }) {
  function Close() {
    setPopup(false);
  }
  return (
    <div className="w-full fixed inset-0 bg-black bg-opacity-[0.6] z-10 m-auto flex">
      <div className="w-1/4 h-[280px] bg-white m-auto flex flex-col space-y-4 justify-center items-center rounded-lg">
        <p className="text-red-500 font-medium text-xl ">
          Do you want to exit?
        </p>
        <button
          onClick={Close}
          className="px-10 py-4 text-white font-bold text-lg rounded-lg bg-blue-500"
        >
          Yes
        </button>
      </div>
    </div>
  );
}

export default Popup;
