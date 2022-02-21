import { useRef, useState } from "react";

import "./styles/googlehome.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export const Google = () => {
  const navigate = useNavigate();
  const [text, setText] = useState("");
  function handleclick(e) {
    if (e.key == "Enter") {
      localStorage.setItem("search", JSON.stringify(text));
      navigate("/search");
    }
  }
  return (
    <div id="conatiner">
      <img
        id="googleimg"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png"
        alt=""
      />
      <input
        type="text"
        placeholder="Search google"
        className="search-box"
        onKeyPress={handleclick}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
    </div>
  );
};
