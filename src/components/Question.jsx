import { useState } from 'react';

import './Question.css';

function Question({prompt, choices, answerIndex, onSubmission, onCorrect}) {
    const [userChoice, setUserChoice] = useState('')
    
    const [feedback, setFeedback] = useState('FEEDBACK MESSAGE')
    const [feedbackStyle, setFeedbackStyle] = useState('hidden')

    const [submitted, changeSubmissionStatus] = useState()

    const handleSubmit = event => {
        event.preventDefault()
        changeSubmissionStatus(true)
        onSubmission(true)
        
        if (userChoice == answerIndex) {
            setFeedback('Your answer was correct! Good job!')
            setFeedbackStyle('feedbackCorrect')
            setUserChoice('')

            onCorrect(1)
        }
        else {
            setFeedback('Incorrect! The correct answer was: ' + choices[answerIndex])
            setFeedbackStyle('feedbackIncorrect')
            setUserChoice('')

            onCorrect(0)
        }
    }

    let choiceMap = choices.map((choice, index) => {
        return (
            <label className = 'button' key={index}>
                <input type='radio' name='choice' value={index} disabled = {submitted} onChange={event => { if (!submitted) {setUserChoice(event.target.value)}}} />{choice}
            </label>
        )
    })
    return (
        <div className='questionContainer' onSubmit={handleSubmit}>
            <div className='prompt'>
                <h2>{prompt}</h2>
            </div>
            <form className='choiceForm'>
                {choiceMap}
                <button className='submitButton' type='submit' disabled = {!userChoice}>Submit</button>
            </form>
            <p className={feedbackStyle}>{feedback}</p>
        </div>

    );
}
 
export default Question;