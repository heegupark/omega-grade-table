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
            <td className="td-name text-center">
              {this.state.name}
            </td>
            <td className="td-course text-center">
              {this.state.course}
            </td>
            <td className="td-grade text-center">
              {this.state.grade}
            </td>
            <td className="td-operation text-center">
              <button
                onClick={() => this.handleUpdateStart()}
                className="btn btn-outline-warning btn-update mr-2 ml-2"><i className="fas fa-pen"></i>
              </button>
              <button
                onClick={() => handleDelete(id)}
                className="btn btn-outline-info btn-delete mr-2 ml-2"><i className="far fa-trash-alt"></i>
              </button>
            </td>
          </tr>
        )
        : (
          <tr key={id}>
            <td className="td-name text-center">
              <input
                autoFocus
                className="input-custom"
                type="text"
                value={this.state.name}
                onChange={this.handleNameChange}
              />
            </td>
            <td className="td-course text-center">
              <input
                className="input-custom"
                type="text"
                value={this.state.course}
                onChange={this.handleCourseChange}
              />
            </td>
            <td className="td-grade text-center">
              <input
                className="input-custom"
                type="number"
                value={this.state.grade}
                onChange={this.handleGradeChange}
              />
            </td>
            <td className="td-operation text-center">
              <button
                onClick={() => this.handleUpdate(id)}
                className="btn btn-danger btn-update mr-2 ml-2"><i className="fas fa-pen"></i>
              </button>
              <button
                onClick={() => this.handleUpdateCancel(event)}
                className="btn btn-warning btn-cancel mr-2 ml-2"><i className="fa fa-ban"></i>
              </button>
            </td>
          </tr>
        )
    );
  }
}

export default Grade;
