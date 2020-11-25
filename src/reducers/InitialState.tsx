import { StateType } from "../State";

export const initialState: StateType = {
    count: {
      count: 0,
    },
    product: {
      products: [],
      currentSearch: "",
      searchHistories: [],
      searchResults: [],
    },
    auth: {
      accessToken: "",
      profile: {
        email: "",
        id: -1,
        name: "",
        password: "",
        verified: false,
      }
    }
  };
  