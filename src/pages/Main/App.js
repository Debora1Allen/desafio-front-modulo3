import Header from '../../componetes/Header';
import List from '../../componetes/TransitionsList';
import Resume from '../../componetes/Resumo';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <List />
        <div>
          <Resume />
          <button className='btn-add'>Adicionar Registro</button>
        </div>

      </main>
    </div>
  );
}

export default App;
