import './App.css';
import Question from './components/Question'

function App() {
  return (
    <div className="App">
      <div className='logo'>
        <h1>
          Maple Highschool Science Club
        </h1>
      </div>

      <Question prompt={'How many subatomic particles are in the nucleus of a helium atom?'} choices={['4 particles', '5 particles', '2 particles', '3 particles']} answer={'1'}/>
    </div>
  );
}

export default App;
