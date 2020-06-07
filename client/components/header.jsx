import React from 'react';

function Header(props) {
  return props.grades.length
    ? (
      <div>
        <h1 className="title">Student Grade Table</h1>
        <h4 className="badge-box-custom">Average Grade <span className="badge badge-primary badge-custom">{props.avg}</span></h4>
      </div>
    )
    : (
      <div>
        <h1 className="title">Student Grade Table</h1>
      </div>
    );

}

export default Header;
