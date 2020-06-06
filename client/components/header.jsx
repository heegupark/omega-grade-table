import React from 'react';

function Header(props) {
  return props.grades.length
    ? (
      <div className="container">
        <h1 className="title">Student Grade Table</h1>
        <h4 className="badge-custom">Average Grade <span className="badge badge-secondary">{props.avg}</span></h4>
      </div>
    )
    : (
      <div className="container">
        <h1 className="title">Student Grade Table</h1>
      </div>
    );

}

export default Header;
