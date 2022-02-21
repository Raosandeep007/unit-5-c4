import { SEARCH_GOOGLE } from "./actionTypes";

const init = {
  data: [],
};

export const SearchReducer = (store = init, { type, payload }) => {
  switch (type) {
    case SEARCH_GOOGLE:
      return { ...store, data: [...data, payload] };
  }
};
