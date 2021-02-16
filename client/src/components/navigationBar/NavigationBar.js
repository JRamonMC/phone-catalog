import React from "react";

const NavigationBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Phones Catalogue
          </a>
          <a className="navbar-brand" aria-current="page" href="/add">
            Add new phone
          </a>
        </div>
      </nav>
    </div>
  );
};

export default NavigationBar;
