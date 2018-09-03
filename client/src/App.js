import React, { Component } from "react";
import "./App.css";
import Main from "./components/Main";

class App extends Component {
    render() {
        return (
            <div className="container">
                <h1>my Idea Box</h1>
                <Main />
            </div>
        );
    }
}

export default App;
