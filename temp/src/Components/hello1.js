import { useState } from "react";
import "./App.css";

export default function UseStateForm() {
  const [value, setValue] = useState("");

  const generateRandomString = () => {
    const randomStr = Math.random().toString(36).substring(2, 8);
    setValue(randomStr);
  };

  return (
    <div className="output-box">
      <input type="text" value={value} readOnly />
      <button onClick={generateRandomString} className="btn">Generate Random String</button>
    </div>
  );
}