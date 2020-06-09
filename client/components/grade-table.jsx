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
        <table className="table-sm table-hover table-bordered table-striped col-sm">
          <thead>
            <tr>
              <th scope="col-sm td-name" className="text-center">Studen Name</th>
              <th scope="col-sm td-course" className="text-center">Course</th>
              <th scope="col-sm td-grade" className="text-center">Grade</th>
              <th scope="col-sm td-operation" className="text-center">Operations</th>
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
              <th scope="col-sm" className="text-center">Studen Name</th>
              <th scope="col-sm" className="text-center">Course</th>
              <th scope="col-sm" className="text-center">Grade</th>
              <th scope="col-sm" className="text-center">Operations</th>
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
