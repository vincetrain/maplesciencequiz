import { useEffect, useState } from 'react';

import './Quiz.css'

import Question from './Question';
import Questions from '../assets/QuestionList'
import trophy from '../assets/trophy.png' 

function Quiz() {
    const [submissionStatus, changeSubmissionStatus] = useState()
    const [newPoints, givePoints] = useState(0)
    const [questionIndex, setQuestionIndex] = useState(0)
    const [points, setPoints] = useState(0)
    const [atEnd, setEnd] = useState(false)

    useEffect(() => {
        setPoints(points + newPoints)
        givePoints(0)
    })

    const handleNext = () => {
        changeSubmissionStatus(false)
        if (questionIndex < Questions.length-1) {
            setPoints(points => points + newPoints)
            setQuestionIndex(questionIndex + 1)
        }
        else {
            setEnd(true)
        }
    }

    return (
        <div>
            {!atEnd &&
                <div className='quizContainer'>
                    <p>Correct: {points}/{Questions.length}</p>
                    <Question
                        prompt={Questions[questionIndex].question}
                        choices={Questions[questionIndex].choices}
                        answerIndex={Questions[questionIndex].answerIndex}
                        onSubmission={changeSubmissionStatus}
                        onCorrect={givePoints}
                        key={questionIndex}
                    />
                    <button className='nextButton' disabled={!submissionStatus} onClick={handleNext}>Next ({questionIndex+1}/{Questions.length})</button>
                </div>
            }
            {atEnd &&
                <div className='endScreen'>
                    <img src={trophy} />
                    <h1>Congruatulations!</h1>
                    <h2>You completed the Maple Highschool Science Club quiz.</h2>
                    <h3>Your score: {points}/{Questions.length}</h3>
                </div>
            }
        </div>
    )
}

export default Quiz;