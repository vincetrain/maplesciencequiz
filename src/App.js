import './App.css';
import Quiz from './components/Quiz'
import logo from './assets/maplesci.png'

function App() {
  return (
    <div className="App">
      <div className='logo'>
        <img src={logo} />
      </div>
      <Quiz />
    </div>
  );
}

export default App;
