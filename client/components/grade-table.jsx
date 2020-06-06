import React from 'react';

function Grade(props) {
  const { id, name, course, grade } = props;
  return (
    <tr key={id}>
      <th scope="row">{name}</th>
      <td>{course}</td>
      <td>{grade}</td>
    </tr>
  );
}

function GradeTable(props) {
  return props.grades.length
    ? (
      <table className="table col-sm">
        <thead className="thead-dark">
          <tr>
            <th scope="col-sm">Studen Name</th>
            <th scope="col-sm">Course</th>
            <th scope="col-sm">Grade</th>
          </tr>
        </thead>
        <tbody className="table-striped">
          {
            props.grades.map(grade => {
              return (
                <Grade
                  key={grade.id}
                  name={grade.name}
                  course={grade.course}
                  grade={grade.grade}
                />
              );
            })
          }
        </tbody>
      </table>
    )
    : (
      <table className="table col-sm">
        <thead className="thead-dark">
          <tr>
            <th scope="col-sm">Studen Name</th>
            <th scope="col-sm">Course</th>
            <th scope="col-sm">Grade</th>
          </tr>
        </thead>
        <tbody className="table-striped">
          <tr>
            <td>No data is found</td>
          </tr>
        </tbody>
      </table>
    );

}

export default GradeTable;
