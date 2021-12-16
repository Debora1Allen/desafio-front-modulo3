import Header from '../../componetes/Header';
import List from '../../componetes/TransitionsList';
import './App.css';

function App() {
  return (
    <div className="App">
     <Header/>
     <main>
      <div><List></List></div>
     </main>
    </div>
  );
}

export default App;
