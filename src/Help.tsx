import React from "react";

export default function Help() {
  return (
    <div id="help">
      <h2>CHAOS GAME</h2>
      <p id="info">
        Change the slider you will notice a beautiful fractal (Sierpinski
        triangle) begin generated. This pattern is generated from simple
        randomness. Numberphile has an amazing video on this
      </p>
      <iframe
        width="550"
        height="300"
        src="https://www.youtube.com/embed/kbKtFN71Lfs"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}
