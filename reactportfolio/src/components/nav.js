import React from 'react';

export default function Nav() {
return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/" >
            Standardize Code
        </a>
        <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle"
                          type="button"
                          id="dropdownMenuButton"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false">
                          Navigate
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="/aboutme">About Me</a>
                            <a className="dropdown-item" href="/portfolio">Portfolio</a>
                            <a className="dropdown-item" href="/contact">Contact</a>
                        </div>
                      </div>
    </nav>
);
}