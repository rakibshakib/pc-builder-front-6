// pages/store/Store.js
import React, { createContext, useReducer, useContext } from "react";
import Reducer, { initialState } from "./State";

const StateContext = createContext();

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);

export default StateProvider;
