import React from "react";
import "./ComingUp.css";
export default function ComingUp({ movies }) {
  return (
    <div>
      {movies.map((movie) => (
        <>
          <img key={movie.id} src={movie.img} />
          <div className="show-footer">
            <div>
              <h5>Streaming @</h5>
              <h4>
                <strong>{movie.streamingAt}</strong>
              </h4>
            </div>
            <div>
              <h5>
                <strong>{movie.price}</strong>
              </h5>
            </div>
          </div>
        </>
      ))}
    </div>
  );
}
