import React from "react";
import Button from "./Button";
import TextBox from "./TextBox";
import "./styles.css";

class App extends React.Component {
  state = {
    textData: " "
  };
  onTextBoxChange = e => {
    e.preventDefault();
    this.setState({
      textData: e.target.value
    });
  };
  ResetClear = e => {
    e.preventDefault();
    this.setState({
      textData: ""
    });
  };
  render() {
    return (
      <div>
        <TextBox
          content={this.state.textData}
          onTextBoxChange={this.onTextBoxChange}
        />
        <br />
        <Button
          value="Submit"
          disable={!this.state.textData}
          className={this.state.textData === "" ? "btnDisable" : "btnEnable"}
        />
        <br />
        <br />
        <Button value="Reset" onClick={this.ResetClear} />
      </div>
    );
  }
}
export default App;
