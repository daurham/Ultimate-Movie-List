import React, { useEffect, useState } from "react";
import { useData } from "../Context";
import Form from "./Form";
import List from "./List";

export default function App() {
  const { movies, addMovie } = useData();
  const [moviesShown, setMoviesShown] = useState(movies);


  const filtermovies = (input) => {
    setMoviesShown(() =>{
      return movies.filter((m) => m.title.indexOf(input) !== -1);
    });
  };

  console.log('movies', movies);
  console.log('moviesShown', moviesShown);
  
  return movies && (
  // return moviesShown && (
  // return (
    <div>
      <h1>Ultimate Movie List</h1>
      <Form 
      btnTxt='➕' 
      inputPlaceholder='add movie' 
      handleClick={addMovie}
      trailer={true}
      />
      <Form 
      btnTxt='search' 
      inputPlaceholder='search movie' 
      handleClick={filtermovies}
      />
      <List movies={movies}/>
      {/* <List movies={moviesShown}/> */}
    </div>
  );
};