import Header from '../../componetes/Header';
import List from '../../componetes/TransitionsList';
import Resume from '../../componetes/Resumo';
import ModalRegister from '../../componetes/ModalTransations/Modal';
import './App.css';
import { useEffect, useState } from 'react';


function App() {
  const [open, setOpen] = useState(false);
  const [transactions, setTransaction] = useState([]);
  const [currentUser, setCurrentUser] = useState(false);
  const [reload, setReload] = useState(false);
  useEffect(() => {
    if (currentUser) {
      return setOpen(true);
    }
  }, [currentUser])

  useEffect(() => {
    if (!open) {
      handleLoad();
    }
  });

  function handlreOrderTransactions(newTransactions) {
    setTransaction(newTransactions)
  }

  useEffect(() => {
    if (!open) {

      handleLoad();
    }
    if (!open && currentUser) {
      setCurrentUser(false);
    }

  }, [open])
  async function handleLoad() {

    const response = await fetch('http://localhost:3333/transactions', {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    });
    const data = await response.json();
    setTransaction(data);
  }

  return (
    <div className="App">
      <Header />
      <main>
        <List transactions={transactions}
          setCurrentUser={setCurrentUser}
          setReload={setReload}
          reload={reload}
          handlreOrderTransactions={handlreOrderTransactions}
        />
        <div>
          <Resume transactions={transactions} />
          <button className='btn-add' onClick={() => setOpen(true)}>Adicionar Registro</button>
        </div>

      </main>
      <ModalRegister
        open={open}
        setOpen={setOpen}
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
      />

    </div>
  );
}

export default App;
