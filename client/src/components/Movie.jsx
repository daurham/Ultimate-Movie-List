import React from 'react'

export default function Movie({ title, hasWatched, watchCount, trailer , id}) {

  const incrementWatchCount = () => { };
  const toggleWatched = () => { };
  const updateMovie = () => { };
  const removeMovie = () => { };

  return (
    <div>
      {
        trailer
          ?
          <h5><a href={trailer} rel='noreferrer'>{title}</a></h5>
          :
          <h5>{title}</h5>
      }
      <span>
        <h6><button onClick={incrementWatchCount}>👀:</button> {watchCount}</h6>
        <input
          type='radio'
          value={hasWatched}
          checked={!!hasWatched}
          onChange={toggleWatched}
        />
      </span>
      <span>
        <button onClick={updateMovie}>edit</button>
        <button onClick={removeMovie}>X</button>
      </span>
    </div>
  )
}
