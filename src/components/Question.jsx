import './Question.css';

function Question(props) {
    function setAnswer(choice) {
        userchoice = choice;
        console.log('set choice to ' + userchoice)
    }

    function checkAnswer() {
        if (userchoice === answer) {
            console.log('correct!')
        }
    }

    let userchoice;
    let choices = props.choices;
    let answer = props.answer;
    let choiceMap = choices.map((choice) => {
            return (
                <label>
                    <input classname = "option" type="radio" name="choice" value={choice} /> {choice}
                </label>
            )
        })

    return (
        <form className="questionContainer">
            <h1>{props.prompt}</h1>
            {choiceMap}
        </form>
    );
}
 
export default Question;