import React from 'react';
import Header from './header';
import GradeTable from './grade-table';
import GradeForm from './grade-form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    };
    this.getAverageGrade = this.getAverageGrade.bind(this);
    this.addGrade = this.addGrade.bind(this);
  }

  componentDidMount() {
    this.getGrades();
  }

  getGrades() {
    fetch('/api/grades')
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
    fetch('/api/grades', {
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
          <div className="col-sm-8">
            <GradeTable
              grades={this.state.grades}
              avg={this.getAverageGrade()}
            />
          </div>
          <div className="col-sm-4">
            <GradeForm onSubmit={this.addGrade} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
