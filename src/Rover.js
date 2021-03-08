import React from "react";
import "./index.css";

class Rover extends React.Component {
  render() {
    const { facing, ghost } = this.props;
    return (
      <span className={`rover ${facing} ${ghost ? "ghost" : ""} `}>🛦</span>
      // <span className={`rover ${facing} ${ghost ? "ghost" : ""} `}>🚀</span>
      // <span className="icon-marsrover">&#xe900;</span>

      // <span className={`rover ${facing} ${ghost ? "ghost" : ""} `}>
      //   <svg
      //     xmlns="http://www.w3.org/2000/svg"
      //     version="1.1"
      //     width="32"
      //     height="32"
      //     viewBox="0 0 32 32"
      //   >
      //     <title>marsrover</title>
      //     <path d="M30 10h-2.6l-1-1 1-1h2.6c0.6 0 1-0.4 1-1s-0.4-1-1-1h-3c-0.3 0-0.5 0.1-0.7 0.3l-1.7 1.7h-3.6c-0.6 0-1 0.4-1 1v7h-7v-6h2c2.2 0 4-1.8 4-4s-1.8-4-4-4h-6c-2.2 0-4 1.8-4 4s1.8 4 4 4h2v6h-3c-0.5 0-0.9 0.3-1 0.7l-1.6 6.3c-1.9 0-3.4 1.6-3.4 3.5s1.6 3.5 3.5 3.5c1.8 0 3.2-1.3 3.4-3h3.1c0.2 1.7 1.7 3 3.4 3 1.8 0 3.2-1.3 3.4-3h3.1c0.2 1.7 1.7 3 3.4 3 1.9 0 3.5-1.6 3.5-3.5s-1.5-3.4-3.4-3.5l-1.4-6.3c-0.1-0.4-0.5-0.7-1-0.7h-1v-6h2.6l1.7 1.7c0.2 0.2 0.4 0.3 0.7 0.3h3c0.6 0 1-0.4 1-1s-0.4-1-1-1zM14 5h1c0.6 0 1 0.4 1 1s-0.4 1-1 1h-1c-0.6 0-1-0.4-1-1s0.4-1 1-1zM10 7h-1c-0.6 0-1-0.4-1-1s0.4-1 1-1h1c0.6 0 1 0.4 1 1s-0.4 1-1 1zM5.5 28c-0.8 0-1.5-0.7-1.5-1.5s0.7-1.5 1.5-1.5 1.5 0.7 1.5 1.5-0.7 1.5-1.5 1.5zM25.5 25c0.8 0 1.5 0.7 1.5 1.5s-0.7 1.5-1.5 1.5-1.5-0.7-1.5-1.5 0.7-1.5 1.5-1.5zM15.5 28c-0.8 0-1.5-0.7-1.5-1.5s0.7-1.5 1.5-1.5 1.5 0.7 1.5 1.5-0.7 1.5-1.5 1.5zM18 21h-5c-0.6 0-1-0.4-1-1s0.4-1 1-1h5c0.6 0 1 0.4 1 1s-0.4 1-1 1z" />
      //   </svg>
      // </span>
    );
  }
}

export default Rover;
