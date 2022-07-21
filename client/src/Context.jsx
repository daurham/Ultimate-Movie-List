import axios from 'axios';
import React, { useState, useEffect, useContext, createContext } from 'react';
import App from './components/App';


const MovieContext = createContext();
export const useData = () => useContext(MovieContext);


export default function Context() {
  const [movies, setMovies] = useState();

  const getMovies = async () => {
    try {
      let { data } = await axios.get('/movies');
      setMovies(data);
    } catch (err) {
      console.error(err);
    }
  };

  const addMovie = async (title, trailer) => {
    let movie = {
      title,
      trailer,
    };
    console.log(movie);
    try {
      let res = await axios.post('/movies', movie);
      getMovies()
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => { getMovies() }, []);

  const value = { movies, addMovie };

  return (
    <>
      <MovieContext.Provider value={value}>
        <App />
      </MovieContext.Provider>
    </>
  );
};