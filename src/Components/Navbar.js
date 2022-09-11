import React from "react";

const Navbar = () => {
  return (
    <nav className="d-flex justify-content-between">
      <div className="d-flex">
        <p>
          <div className="bg-secondary"></div>Published
        </p>
        <p>
          <div className="bg-success"></div>Scheduled
        </p>
        <p>
          <div className="bg-warning"></div>Need Approval
        </p>
        <p>
          <div className="bg-danger"></div>Error
        </p>
        <p>
          <div className="bg-primary"></div>Notes
        </p>
      </div>

      <img src="https://picsum.photos/50" alt="user" />
    </nav>
  );
};

export default Navbar;
