import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {
        directors.map((director, i) => {
          return (
            <div key={i}>
              <h2>Director: {director.name}</h2>
              <h3>Movies:</h3>
              <ul>
              {
                director.movies.map((movie, i) => {
                  return (
                    <li key={i}>{movie}</li>
                  )
                })
              }
              </ul>
            </div>
          )
        })
      }
    </div>
  );
}

export default Directors
