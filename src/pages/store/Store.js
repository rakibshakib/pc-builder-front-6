// pages/store/Store.js
import React, { createContext, useReducer, useContext } from "react";
import reducer, { initialState } from "./state";

const StateContext = createContext();

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);

export default StateProvider;
