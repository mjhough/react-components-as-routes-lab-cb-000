import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {
        actors.map(actor => {
          return (
            <div>
              <h2>Name: {actor.name}</h2>
              <h3>Movies:</h3>
              <ul>
                {
                  actor.movies.map(movie => {
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
};

export default Actors;
