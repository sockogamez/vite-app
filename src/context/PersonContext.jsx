import { createContext, useState,useEffect } from "react";

export const PersonContext = createContext();

export function PersonContextProvider(props) {
  let version = "1.0";
  
  return (
    <PersonContext.Provider
      value={{
        version
      }}
    >
      {props.children}
    </PersonContext.Provider>
  );
}
