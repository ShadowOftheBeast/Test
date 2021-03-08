import React from "react";
import Mars from "./Mars";

class App extends React.Component {
  state = {
    commands: "",
    commandsToExecute: "",
    execute: false,
    startPosition: "00N",
  };

  addCommand = (e) => {
    this.setState({
      commands: this.state.commands + e.target.value,
    });
  };

  runSample = (e) => {
    this.setState({
      commands: e.target.value,
    });
  };

  execute = () => {
    let startPosition = this.startInput.value;
    if (/^[0-4][0-4][NEWS]$/.test(startPosition)) {
      this.setState({
        execute: true,
        commandsToExecute: this.state.commands,
        startPosition,
      });
    } else {
      alert("Invalid start position.");
    }
  };

  clear = () => {
    this.setState({
      commands: "",
      execute: false,
      commandsToExecute: "",
    });
  };

  validateStartPosition = (e) => {
    e.target.checkValidity();
  };

  stopExecute = () => {
    this.setState({
      execute: false,
    });
  };

  render() {
    let position = this.state.startPosition || "00N";
    position = position.split("").join(" ");

    return (
      <div className={"app"}>
        <h1 className={"app-name"}>Mars Rover Project</h1>
        <div className={`control-panel`}>
          <div className={"start-position"}>
            <label htmlFor="startPosition">Current Position:</label>
            <input
              type="text"
              id="startPosition"
              maxLength={3}
              required
              pattern={"^[0-4][0-4][NEWS]$"}
              defaultValue={"00N"}
              onBlur={this.validateStartPosition}
              ref={(elm) => {
                this.startInput = elm;
              }}
            />
          </div>
          <div className="commands">
            <button value="M" onClick={this.addCommand}>
              Move
            </button>
            <button value="L" onClick={this.addCommand}>
              Left
            </button>
            <button value="R" onClick={this.addCommand}>
              Right
            </button>
          </div>
          <div className="execution">
            <button onClick={this.clear} className="secondary">
              ✖
            </button>
            <input type="text" readOnly value={this.state.commands} />
            <button className={"cta"} onClick={this.execute}>
              Execute
            </button>
          </div>
          <div className="samples">
            <label>Sample: </label>
            <ul>
              <li>
                <button value={"|LMLMLMLMM"} onClick={this.runSample}>
                  1 2 N|LMLMLMLMM
                </button>
              </li>
              <li>
                <button value={"MMRMMRMRRM"} onClick={this.runSample}>
                  3 3 E|MMRMMRMRRM
                </button>
              </li>
            </ul>
          </div>
        </div>
        <Mars
          size={5}
          position={position}
          commands={this.state.commandsToExecute}
          execute={this.state.execute}
          onDone={this.stopExecute}
        />
      </div>
    );
  }
}

export default App;

// original functional Component
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
