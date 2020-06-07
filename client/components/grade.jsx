import React, { Component } from 'react';

class Grade extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      course: props.course,
      grade: props.grade,
      isUpdate: false
    };
    this.handleUpdateStart = this.handleUpdateStart.bind(this);
    this.handleUpdateCancel = this.handleUpdateCancel.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleCourseChange = this.handleCourseChange.bind(this);
    this.handleGradeChange = this.handleGradeChange.bind(this);
  }

  handleNameChange(event) {
    this.setState({
      name: event.target.value
    });
  }

  handleCourseChange(event) {
    this.setState({
      course: event.target.value
    });
  }

  handleGradeChange(event) {
    this.setState({
      grade: event.target.value
    });
  }

  handleUpdateStart() {
    this.setState({
      isUpdate: !this.state.isUpdate
    });
  }

  handleUpdateCancel(event) {
    event.preventDefault();
    this.setState({
      name: this.props.name,
      course: this.props.course,
      grade: this.props.grade,
      isUpdate: !this.state.isUpdate
    });
  }

  handleUpdate(id) {
    // event.preventDefault();
    const updateGrade = {
      id: id,
      name: this.state.name,
      course: this.state.course,
      grade: this.state.grade
    };
    this.props.handleUpdateGrade(updateGrade);
    this.setState({
      isUpdate: !this.state.isUpdate
    });
  }

  render() {
    const {
      id,
      handleDelete
    } = this.props;

    return (
      !this.state.isUpdate
        ? (
          <tr key={id}>
            <th className="td-name">
              {this.state.name}
            </th>
            <td className="td-course">
              {this.state.course}
            </td>
            <td className="td-grade">
              {this.state.grade}
            </td>
            <td className="td-operation">
              <button
                onClick={() => this.handleUpdateStart()}
                className="btn btn-warning btn-update">Update
              </button>
              <button
                onClick={() => handleDelete(id)}
                className="btn btn-info btn-delete">Delete
              </button>
            </td>
          </tr>
        )
        : (
          <tr key={id}>
            <th className="td-name">
              <input
                autoFocus
                className="input-custom"
                type="text"
                value={this.state.name}
                onChange={this.handleNameChange}
              />
            </th>
            <td className="td-course">
              <input
                className="input-custom"
                type="text"
                value={this.state.course}
                onChange={this.handleCourseChange}
              />
            </td>
            <td className="td-grade">
              <input
                className="input-custom"
                type="number"
                value={this.state.grade}
                onChange={this.handleGradeChange}
              />
            </td>
            <td className="td-operation">
              <button
                onClick={() => this.handleUpdate(id)}
                className="btn btn-warning btn-update">Update
              </button>
              <button
                onClick={() => this.handleUpdateCancel(event)}
                className="btn btn-danger btn-cancel">Cancel
              </button>
            </td>
          </tr>
        )
    );
  }
}

export default Grade;
