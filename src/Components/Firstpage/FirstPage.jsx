import React, { useState } from "react";

function FirstPage() {
  const [counter, SetCounter] = useState(0);

  function Increment() {
    SetCounter(counter + 1);
  }
  function Decrement() {
    SetCounter(counter - 1);
  }
  return (
    <div className="bg-white w-3/4 h-full mx-auto  rounded-lg">
      <div className="flex flex-col space-y-10 items-center justify-center w-1/2 h-full m-auto">
        <div className="text-green-500 font-bold text-3xl ">{counter}</div>
        <div className="flex space-x-4">
          <button
            onClick={Decrement}
            className="text-white bg-blue-500 px-10 py-4 text-lg font-bold  rounded-lg"
          >
            Decrement
          </button>
          <button
            onClick={Increment}
            className="text-white bg-black px-10 py-4 text-lg font-bold rounded-lg"
          >
            Increment
          </button>
        </div>
      </div>
    </div>
  );
}

export default FirstPage;
