import React from "react";
import ReactDOM from "react-dom";
import "../styles/Layout.css";

// Components
import Main from "./Main";

class Layout extends React.Component {
  render() {
    return (
      <div>
        <div className="layout-container">
          <div />
          <div className="dashboard-container">
            <div className="chart-1">
              <Main type="line" />
            </div>
            <div className="chart-2">
              <Main type="bar" />
            </div>
            <div className="chart-3">
              <Main type="pie" />
            </div>
          </div>
          <div />
        </div>
      </div>
    );
  }
}

export default Layout;
