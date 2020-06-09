import React from 'react';
import Header from './header';
import GradeTable from './grade-table';
import GradeForm from './grade-form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: [],
      isUpdate: false
    };
    this.addGrade = this.addGrade.bind(this);
    this.getAverageGrade = this.getAverageGrade.bind(this);
    this.deleteGrade = this.deleteGrade.bind(this);
    this.updateCompleteGrade = this.updateCompleteGrade.bind(this);
  }

  componentDidMount() {
    this.getGrades();
  }

  getGrades() {
    fetch('http://ogt.heegu.net:3021/api/grades')
      .then(res => res.json())
      .then(data => {
        this.setState({
          grades: data
        });
      })
      .catch(err => console.error(err.message));
  }

  getAverageGrade() {
    const data = [...this.state.grades];
    return Math.floor(data.reduce((sum, grade) => sum + Number(grade.grade), 0) / data.length);
  }

  addGrade(newGrade) {
    fetch('http://ogt.heegu.net:3021/api/grades', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newGrade)
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          grades: [...this.state.grades, data]
        });
      })
      .catch(err => console.error(err.message));
  }

  deleteGrade(id) {
    fetch(`http://ogt.heegu.net:3021/api/grades/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id: id })
    })
      .then(res => res.json())
      .then(() => {
        this.setState(({ grades }) => ({
          grades: grades.filter(grade => id !== grade.id)
        }));
      })
      .catch(err => console.error(err.message));
  }

  updateCompleteGrade(updatedGrade) {
    fetch(`http://ogt.heegu.net:3021/api/grades/${updatedGrade.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: updatedGrade.id,
        name: updatedGrade.name,
        course: updatedGrade.course,
        grade: Number(updatedGrade.grade)
      })
    })
      .then(res => res.json())
      .then(() => {
        this.setState(({ grades }) => ({
          grades: grades.filter(grade => {
            if (grade.id === updatedGrade.id) {
              grade.name = updatedGrade.name;
              grade.course = updatedGrade.course;
              grade.grade = updatedGrade.grade;
            }
            return true;
          })
        }));
      })
      .catch(err => console.error(err.message));
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <Header
              grades={this.state.grades}
              avg={this.getAverageGrade()}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-table-custom">
            <GradeTable
              grades={this.state.grades}
              handleUpdateGrade={this.updateCompleteGrade}
              handleDelete={this.deleteGrade}
            />
          </div>
          <div className="col-form-custom">
            <GradeForm onSubmit={this.addGrade} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
