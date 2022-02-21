import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Navbar } from "./Navbar";

export const Result = () => {
  const buttontext = [
    "Sort A-Z",
    "Sort Z-A",
    "Sort by Date (Asc)",
    "Sort by Date (Desc)",
    "Sort by quality (Asc)",
    "Sort by quality (Desc)",
    "Fillter explicit",
  ];
  const [alldata, setData] = useState([]);
  let search = JSON.parse(localStorage.getItem("search"));

  const data = [];
  alldata.map((item) => {
    if (item.title.includes(search)) {
      data.push(item);
    }
  });

  useEffect(() => {
    axios.get(`https://fast-reef-22226.herokuapp.com/data`).then(({ data }) => {
      setData(data);
    });
  }, []);
  return (
    <div>
      <Navbar />
      <div id="buttons">
        {buttontext.map((item) => (
          <button key={item}>{item}</button>
        ))}
      </div>
      <div id="detailed-result">
        {data.map((item) => (
          <div key={item.id}>
            <div id="url">{item.url}</div>

            <div id="name">
              <Link to={`/page/${item.id}`} className="title">
                {item.title}
              </Link>
              <div className="author">{item.author}</div>
            </div>
            <div id="dis" className="desc">
              {item.description}
            </div>
            <div className="creation-date">
              Creation Date: {item.creation_date}
            </div>
            <div className="explicit">
              Explicit: {item.explicit ? "Yes" : "No"}
            </div>
            <div>Quality %: {item.quality}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
