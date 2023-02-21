import './App.css';
import Header from './Header'
import Content from './Content'
import Total from './Total'

function App() {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const sumExercices = exercises1 + exercises2 + exercises3;

  return (
    <div className="App">
      <div>
      <Header course={course}></Header>
      <Content namePart={part1} numExercises={exercises1}></Content>
      <Content namePart={part2} numExercises={exercises2}></Content>
      <Content namePart={part3} numExercises={exercises3}></Content>
      <Total total={sumExercices}></Total>
      </div>
    </div>
  );
}

export default App;
