import React, { useState } from "react";
import "./App.css";
import classNames from "classnames";

function App() {
  const [sidebarActive, setSidebarActive] = useState(false);
  const handleMenuIconOnClick = () => {
    setSidebarActive(!sidebarActive);
  };
  return (
    <div className="App">
      <div className="grid-container">
        <div className="menu-icon" onClick={handleMenuIconOnClick}>
          <strong> &#9776;</strong>
        </div>
        <header className="header">
          <div>Search...</div>
          <div>Logout</div>
        </header>
        <aside
          className={classNames("aside", {
            active: sidebarActive,
          })}
        >
          <div
            className={classNames("aside-close-icon", {
              active: sidebarActive,
            })}
            onClick={handleMenuIconOnClick}
          >
            <strong>&times;</strong>
          </div>
          <ul>
            <li>Home</li>
            <li>Outstanding</li>
            <li>My Team</li>
            <li>Customers</li>
            <li>Disputes</li>
          </ul>
        </aside>
        <main className="main">
          <div className="main-overview">
            <div className="overview-card">
              <div className="overview-card-info">Overview</div>
              <div className="overview-card-icon">Card</div>
            </div>
            <div className="overview-card">
              <div className="overview-card-info">Overview</div>
              <div className="overview-card-icon">Card</div>
            </div>
            <div className="overview-card">
              <div className="overview-card-info">Overview</div>
              <div className="overview-card-icon">Card</div>
            </div>
            <div className="overview-card">
              <div className="overview-card-info">Overview</div>
              <div className="overview-card-icon">Card</div>
            </div>
          </div>
          <div className="main-cards">
            <div className="card">Card</div>
            <div className="card">Card</div>
            <div className="card">Card</div>
          </div>
        </main>
        <footer className="footer">
          <div>&copy;2020</div>
          <div>Made with &hearts;</div>
        </footer>
      </div>
    </div>
  );
}

export default App;
