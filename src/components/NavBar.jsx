import React from "react";

const NavBar = props => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div href="#" className="navbar-brand">
        Number of Counters:{" "}
        <span className="badge badge-pill badge-secondary">
          {props.numberOfCounters}
        </span>
      </div>
    </nav>
  );
};

export default NavBar;
