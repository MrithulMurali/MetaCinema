import React from "react";
import ComingUp from "./ComingUp/ComingUp";

export default function BookShow({ movies }) {
  return (
    <div>
      <div>
        <h5>Coming Up</h5>
        <ComingUp movies={movies} />
      </div>
    </div>
  );
}
