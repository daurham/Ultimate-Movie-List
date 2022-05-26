import React, { useEffect, useContext, createContext } from 'react';
import App from './components/App';


const MovieContext = createContext({data: 'datas'});
export const useData = () => useContext(MovieContext);


export default function Context() {

  const value = {data: 'Data from Context component'};
  return (
    <>
      <h1>My Context</h1>
      <MovieContext.Provider value={value}>
        <App />
      </MovieContext.Provider>
    </>
  );
};