import React, { useEffect, useState, useCallback } from "react";

function Password2() {
  const [inputPwd, setInputPwd] = useState("");
  const [rangeVal, setRangeVal] = useState(8);
  const [checkBoxNumber, setCheckBoxNumber] = useState(false);
  const [checkBoxSpecialCharacter, setCheckBoxSpecialCharacter] = useState(false);
  const [show, setShow] = useState(false);

  const passwordGenerator = useCallback(() => {
    console.log("passwordGenerator function recreated!");
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (checkBoxNumber) str += "0123456789";
    if (checkBoxSpecialCharacter) str += "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

    for (let index = 1; index <= rangeVal; index++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setInputPwd(pass);
  }, [rangeVal, checkBoxNumber, checkBoxSpecialCharacter]);

  useEffect(() => {
    passwordGenerator();
  }, [checkBoxNumber, checkBoxSpecialCharacter, rangeVal]);

  function copyAndShow() {
    navigator.clipboard.writeText(inputPwd);
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 800);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Password Generator</h2>

      <div className="flex items-center w-full max-w-lg bg-white shadow-md rounded-lg overflow-hidden">
        <input
          type="text"
          value={inputPwd}
          readOnly
          className="w-full p-3 border-none focus:outline-none bg-gray-100"
        />
        <button
          onClick={copyAndShow}
          className="px-4 py-2 bg-blue-500 text-white font-semibold hover:bg-blue-600 transition"
        >
          Copy
        </button>
      </div>
      <div className="h-12 flex justify-between items-center">
      {show && (
        <span className="mt-2 px-4 py-1 bg-green-500 text-white rounded-md font-semibold">
          Copied!
        </span>
      )}
      </div>


      <div className="w-full max-w-lg mt-6 bg-white p-4 rounded-lg shadow-md">
        <div className="flex items-center gap-4">
          <input
            type="range"
            value={rangeVal}
            onChange={(e) => setRangeVal(e.target.value)}
            className="w-full cursor-pointer"
          />
          <span className="text-lg font-semibold">{rangeVal}</span>
        </div>

        <div className="flex justify-between mt-4">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              onChange={() => setCheckBoxNumber(!checkBoxNumber)}
              checked={checkBoxNumber}
              className="w-4 h-4 accent-blue-500 cursor-pointer"
            />
            <span className="text-gray-700">Numbers</span>
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              onChange={() => setCheckBoxSpecialCharacter(!checkBoxSpecialCharacter)}
              checked={checkBoxSpecialCharacter}
              className="w-4 h-4 accent-blue-500 cursor-pointer"
            />
            <span className="text-gray-700">Special Characters</span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default Password2;
