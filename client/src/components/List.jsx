import React from 'react'
import Movie from './Movie'

export default function List({ movies }) {
  return (
    <div>
      {movies.map((m, index) => (
        <Movie 
          key={index}
          title={m.title}
          hasWatched={m.hasWatched}
          watchedCount={m.watchedCount}
          trailer={m.trailer}
          id={m.id}
        />
      ))}
    </div>
  )
}
