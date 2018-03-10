import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {
        directors.map(director => {
          return (
            <div>
              <h2>Director: {director.name}</h2>
              <h3>Movies:</h3>
              <ul>
              {
                director.movies.map(movie => {
                  return (
                    <li>{movie}</li>
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
