import logo from './logo.svg';
import './App.css';
import Question from './Components/Question';
import { Component, useEffect, useState } from 'react';





function App() {
  
  const [quizData, setQuizData] =useState([]);
  const [title, setTitle] = useState("")
  
  useEffect(() => {
    // API request code here
    fetch("http://localhost:3000/quizData")
    .then(res => res.json())
    .then(data =>{
      console.log("data",data) // for testing 
      setQuizData(data)})
    .catch(err=>console.error(err))
    
    
    fetch("http://localhost:3000/title")
    .then(res => res.json())
    .then(res =>  {
        console.log("title from the response",res.title) // get the title frome response
        setTitle(res.title) // set the title using state
        console.log("title after changing state",title) // 

    })
    .catch(err=>console.error(err))
  }, []); // Empty dependency array to execute once on component mount
  
   
      
  
return (
    <div className="App">
    {quizData &&  <Question title = {title}  quizDatas = {quizData} />}
      
    </div>
  );
}

export default App;
