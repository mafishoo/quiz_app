import logo from './logo.svg';
import './App.css';
import Question from './Components/Question';

const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Rome"],
    correctAnswer: "Paris"
  },
  {
    question: "which planet is known as the Red Planet?",
    options: ["venus", "Mars", "Jupiter", "Saturn"],
    correctAnswer: "Mars"
  }
]

function App() {
  return (
    <div className="App">
      <Question  quizDatas = {quizData} />
      
    </div>
  );
}

export default App;
