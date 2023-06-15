 
 function Question (props){
    return (
        <div> 
        <h1> {props.title}</h1>
        <ul>
            {
            props.quizDatas.map(quiz =>
                <li>
                    <h2> {quiz.question} </h2>
                    <ul>
                       {quiz.options.map(option =>
                        <li> {option} </li>)}
                    </ul>
                </li> )
            }
        </ul>
        </div>
    )
 }
 export default Question
 

  

  

 