import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {
        actors.map((actor, i) => {
          return (
            <div key={i}>
              <h2>Name: {actor.name}</h2>
              <h3>Movies:</h3>
              <ul>
                {
                  actor.movies.map((movie, i) => {
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
};

export default Actors;
