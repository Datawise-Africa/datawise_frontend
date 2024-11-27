import { createContext, useReducer, useState, useEffect } from "react";
const positionProviderActions = {
  SET_POSITION: "SET_POSITION",
  RESET_POSITION: "RESET_POSITION",
};

const POSITION_KEY = "selected_position_key";

const initialState = JSON.parse(localStorage.getItem(POSITION_KEY))
  ? JSON.parse(localStorage.getItem(POSITION_KEY))
  : {
      selectedPosition: null,
    };

const positionReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case positionProviderActions.SET_POSITION:
      return { ...state, selectedPosition: payload };
    case positionProviderActions.RESET_POSITION:
      return { ...state, selectedPosition: null };
    default:
      return state;
  }
};
// Create context
export const PositionContext = createContext(initialState);

// Create provider
export const PositionProvider = ({ children }) => {
  const [state, dispatch] = useReducer(positionReducer, initialState);
  useEffect(() => {
    localStorage.setItem(POSITION_KEY, JSON.stringify(state));
  }, [state]);

  return (
    <PositionContext.Provider value={{ state, dispatch }}>
      {children}
    </PositionContext.Provider>
  );
};
