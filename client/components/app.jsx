import React from 'react';
import GradeTable from './grade-table';
import Header from './header';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    };
    this.getAverageGrade = this.getAverageGrade.bind(this);
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
    return Math.floor(data.reduce((sum, grade) => sum + grade.grade, 0) / data.length);
  }

  render() {
    return (
      <Header
        grades={this.state.grades}
        avg={this.getAverageGrade()}
      />,
      <GradeTable
        grades={this.state.grades}
        avg={this.getAverageGrade()}
      />
    );
  }
}

export default App;
