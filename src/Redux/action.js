import axios from "axios";
import { SEARCH_GOOGLE } from "./actionTypes";

export const getDataSuccess = (payload) => {
  type: SEARCH_GOOGLE, payload;
};
export const getSearch = () => () => {
  axios.get(`https://fast-reef-22226.herokuapp.com/data`).then(({ data }) => {
    dispatchEvent(getDataSuccess(data));
  });
};
