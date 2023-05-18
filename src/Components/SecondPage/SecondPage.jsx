import React, { useState } from "react";
import Popup from "../../Common/Popup/Popup";

function SecondPage() {
  const [popup, setPopup] = useState(false);
  function Open() {
    setPopup(true);
  }

  return (
    <div>
      <div>
        <button
          onClick={Open}
          className="px-10 py-4 bg-blue-500 text-white font-bold text-lg"
        >
          Click Me
        </button>
      </div>
      {popup ? <Popup popup={popup} setPopup={setPopup} /> : null}
    </div>
  );
}

export default SecondPage;
