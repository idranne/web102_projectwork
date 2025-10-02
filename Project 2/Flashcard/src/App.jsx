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
      };
    }

    const handlePrevious = () =>{
      //if we are greater than the first question
      if(currentIndex > 0){
        setCurrentIndex(currentIndex - 1);
        setShowAnswer(false);
      }
    }
    
    //toggle between question and answer on click 

    //short way of saying if showAnswer == false; make it to be true
    const handleCardClick = () =>{
      setShowAnswer((prev) => !prev);
    };

  
  return (
    <>
        <div className="app-container">
            <h2>❤️Learn France Culture And Visit Eiffel Towel❤️</h2>
            <h2>How quickly can you learn about France? If you earn 10points and above, you earn a trip to France😊</h2>
            <h2>Translate the following phrase in English while boosting your knowledge of France culture</h2>
            <h3>Number of cards to play: 15</h3>

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
            <p>{questionsLists[currentIndex ].answer}</p>
          </div>
        </div>
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
      </div>
    </div>
    </>
  );
}

export default App;
          