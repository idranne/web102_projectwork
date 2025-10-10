import { useState } from 'react'
import React from 'react';
import './App.css'

function App() {
  //usetstate
  const [count, setQuestions] = useState("Start");

  //dictionary of questions and answers
  const questionsLists = [{question:"Comment dire bonjour en anglais?", answer: "Good morning"},
                        {question:"Quel est la langue d'amour", answer: "French is considered the most romantic lanugages in the world"},
                        {question:"Quel est le musee le plus visite en France?", answer: "Louvre Museum"},
                        {question:"Quel est la capitale de France", answer: "Paris"},
                        {question:"Quel est la nourriture la plus consomme en France", answer: "Les baguettes (very popular bread in France"},
                        {question:"Quel pourcentage de la langue francaise a ete emprunter par l'anglais", answer: "29% of the English vocabulary was borrowed by French vocabulary"},
                        {question:"Quel territoire francaise est situe en Amerique du Sud", answer: "Guyana is the French territory situated in South America"},
                        {question: "Quel est le nom de la residence ou se trouve le President de la france", answer: "L'Elysee Palace"},
                        {question: "Quel est la devise des francais", answer :"Liberte, Egalite, Fraternites(Liberty, Equality, Fraternity)"},
                        {question: "Quel est le nom de la rivere qui coule sur Paris", answer:"La Siene"},
                        {question: "Dans quel musee trouvons-nous le tableau de Mona Lisa et Venus de Lilo", answer:"Louvre Museum"},
                        {question: "Quel est nom de la tournee en bicylette qui se fait chaque annee en France", answer:"Le Tour de la France"},
                        {question: "Quel est le nom officiel de Ivory Coast", answer:"Cote d'Ivoire"},
                        {question: "Que signifie college en France", answer:"Middle school for students between 11-15"},
                        {question: "Que signifie lycee en France", answer:"High school that prepare students for college"}
                      
                      
                      ];

   //Implement the state 

    //get the answers via usestate
    const [currentIndex, setCurrentIndex] = useState(0);
    //showing answer
    const [showAnswer, setShowAnswer] = useState(false);

    const [score, setScore] = useState(0);

    //answer from the user
    const [userAnswer, setUserAnswer] = useState('');

    //true or false from the user
    const [isError, setIsError] = useState(false);

    //get the question + answer at that index
    const currentQuestion = questionsLists[currentIndex].question;
    const currentAnswer = questionsLists[currentIndex].answer;

    //handle the next index

    const handleNext = () =>{
      //if we are not at the last index 
      if (currentIndex < questionsLists.length -1){
        //SET THE STATE TO BE THE NEXT INDEX
        setCurrentIndex(currentIndex +1);
        setShowAnswer(false);
        setUserAnswer('');
        setIsCorrect(false);
      };
    }

    const handlePrevious = () =>{
      //if we are greater than the first question
      if(currentIndex > 0){
        setCurrentIndex(currentIndex - 1);
        setShowAnswer(false);
        setUserAnswer('');
        setIsCorrect(false);
      }
    }
    
    //toggle between question and answer on click 

    //short way of saying if showAnswer == false; make it to be true
    const handleCardClick = () =>{
      setShowAnswer((prev) => !prev);
    };

    //grabing user input
    const handleChange = (e) =>{
      setUserAnswer(e.target.value);
    };

  

    const handleSubmit = (e) => {
      //if that condition is false
      e.preventDefault();
      //making everything valid and on the same scale
      const correctAnswer = questionsLists[currentIndex].answer.trim().toLowerCase();
      const userResponse = userAnswer.trim().toLowerCase();
     setIsError(correctAnswer === userResponse);
     setScore (score +1);

    }

    //changing styling
    const inputStyle = {
      border: isError ? '5px solid green': '5px solid red',
      borderRadius: '5px',
      padding: '8px'
      
    };

  
  return (
    <>
        <div className="app-container">
            <h2>❤️Learn France Culture And Visit Eiffel Towel❤️</h2>
            <h2>How quickly can you learn about France? If you earn 10points and above, you earn a trip to France😊</h2>
            <h2>Translate the following phrase in English while boosting your knowledge of France culture</h2>
            <h3>Number of cards to play: 15</h3>
                    {userAnswer && (
    <><p style={{ color: isError ? 'green' : 'red' }}>
                {isError ? '✅ Correct!' : '❌ Try again'}
              </p><p className = "score">  Score = {score} / {questionsLists.length} </p></>
  )}

            {/* Flashcard container */}
      <div
        className={`flashcard ${showAnswer ? "flipped" : ""}`}
        onClick={handleCardClick}
      >
        <div className="flashcard-inner">
          <div className="flashcard-front">
            <p>{questionsLists[currentIndex].question}</p>
          </div>
          <div className="flashcard-back">
            <p>{questionsLists[currentIndex].answer}</p>
          </div>
        </div>
        </div>
        
        <div className = "guest-input">
          <h2>Type your answer in the text box below</h2>


          <form onSubmit = {handleSubmit}>
            <label>
              Guess your answer here:
              <input type = "text" 
              className ="input-box"
               placeholder = "Place your answer here"
              value={userAnswer} 
              style = {inputStyle} 
              onChange={handleChange}/>
            </label>
            
     
   <button type= "submit" className = "guess-btn">Submit Guess </button>
          </form>
       
          </div>

      {/* Navigation buttons */}
      <div className="buttons">
        <button onClick={handlePrevious} disabled={currentIndex === 0}>
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={currentIndex === questionsLists.length - 1}

          
        >
          Next
        </button>
        <button>Shuffle Cards</button>
      </div>
    </div>
    </>
  );
}

export default App;
          