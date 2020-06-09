import React, { Component } from 'react';

class GradeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      course: '',
      grade: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleCourseChange = this.handleCourseChange.bind(this);
    this.handleGradeChange = this.handleGradeChange.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
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

  handleSubmit(event) {
    event.preventDefault();
    const newGrade = {
      name: this.state.name,
      course: this.state.course,
      grade: this.state.grade
    };
    this.props.onSubmit(newGrade);
    this.setState({
      name: '',
      course: '',
      grade: ''
    });
  }

  handleCancel(event) {
    event.preventDefault();
    this.setState({
      name: '',
      course: '',
      grade: ''
    });
  }

  render() {
    const { name, course, grade } = this.state;
    const { handleSubmit, handleNameChange, handleCourseChange, handleGradeChange, handleCancel } = this;
    return (
      <form onSubmit={handleSubmit}>
        <div className="input-group mb-2">
          <div className="input-group-prepend">
            <i className="input-group-text fa fa-user icon-custom"></i>
          </div>
          <input
            required
            type="text"
            value={name}
            className="form-control"
            placeholder="Name"
            onChange={handleNameChange} />
        </div>
        <div className="input-group mb-2">
          <div className="input-group-prepend">
            <i className="input-group-text fa fa-list icon-custom"></i>
          </div>
          <input
            required
            type="text"
            value={course}
            className="form-control"
            placeholder="Course"
            onChange={handleCourseChange} />
        </div>
        <div className="input-group mb-2">
          <div className="input-group-prepend">
            <i className="input-group-text fa fa-graduation-cap icon-custom"></i>
          </div>
          <input
            required
            type="number"
            value={grade}
            className="form-control"
            placeholder="Grade"
            onChange={handleGradeChange} />
        </div>
        <div className="form-btn-box">
          <button type="submit" className="btn btn-primary form-btn-add">Add</button>
          <button type="button" onClick={handleCancel} className="btn btn-warning form-btn-cancel">Cancel</button>
        </div>
      </form>
    );
  }
}

export default GradeForm;
