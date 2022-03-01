import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "./Navbar";
import "./styles/Result.css";
export const Result = () => {
  const [alldata, setData] = useState([]);
  let search = JSON.parse(localStorage.getItem("search"));

  let data = [];
  alldata.map((item) => {
    if (item.title.includes(search)) {
      data.push(item);
    }
  });
  useEffect(() => {
    axios.get(`https://fast-reef-22226.herokuapp.com/data`).then(({ data }) => {
      setData(data);
    });
    console.log(data);
  }, []);
  function handle() {
    console.log(data);
    data.sort((a, b) => {
      var nameA = a.title.toUpperCase(); // ignore upper and lowercase
      var nameB = b.title.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      // names must be equal
      return 0;
    });
    
  }
  return (
    <div>
      <Navbar />
      <div id="buttons">
        <button className="btn" onClick={handle}>
          Sort A-Z
        </button>
        <button className="btn">Sort Z-A</button>
        <button className="btn">Sort by Date (Asc)</button>
        <button className="btn">Sort by Date (Desc)</button>
        <button className="btn">Sort by quality (Asc)</button>
        <button className="btn">Sort by quality (Desc)</button>
        <button className="btn">Fillter explicit</button>
      </div>
      {data.map((item) => (
        <div id="detailed-result" key={item.id}>
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
          <div id="eq">
            <div className="explicit">
              Explicit: {item.explicit ? "Yes" : "No"}
            </div>
            <div>Quality %: {item.quality}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
