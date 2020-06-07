import React, { Component } from 'react';
import Grade from './grade';

class GradeTable extends Component {
  render() {
    const {
      grades,
      handleUpdateGrade,
      handleDelete
    } = this.props;

    return this.props.grades.length
      ? (
        <table className="table table-striped col-sm">
          <thead className="thead-dark">
            <tr>
              <th scope="col-sm td-name">Studen Name</th>
              <th scope="col-sm td-course">Course</th>
              <th scope="col-sm td-grade">Grade</th>
              <th scope="col-sm td-operation">Operations</th>
            </tr>
          </thead>
          <tbody>
            {
              grades.map(grade => {
                return (
                  <Grade
                    key={grade.id}
                    id={grade.id}
                    name={grade.name}
                    course={grade.course}
                    grade={grade.grade}
                    handleUpdateGrade={handleUpdateGrade}
                    handleDelete={handleDelete}
                  />
                );
              })
            }
          </tbody>
        </table>
      )
      : (
        <table className="table table-striped col-sm">
          <thead className="thead-dark">
            <tr>
              <th scope="col-sm">Studen Name</th>
              <th scope="col-sm">Course</th>
              <th scope="col-sm">Grade</th>
              <th scope="col-sm">Operations</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="4">No data is found</td>
            </tr>
          </tbody>
        </table>
      );
  }
}

export default GradeTable;
