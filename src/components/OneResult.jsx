import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import "./styles/Result.css";

export const OneResult = () => {
  const [item, setData] = useState([]);

  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`https://fast-reef-22226.herokuapp.com/data/${id}`)
      .then(({ data }) => {
        setData(data);
      });
  }, []);
  return (
    <div>
      <div id="detailed-result">
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
          <div id="eq">
            <div className="explicit">
              Explicit: {item.explicit ? "Yes" : "No"}
            </div>
            <div>Quality %: {item.quality}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
