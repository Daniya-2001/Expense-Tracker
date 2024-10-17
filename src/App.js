import React from 'react';
import './App.css';
import Header from './Components/Header';
import Balance from './Components/Balance';
import IncomeExpnese from './Components/IncomeExpnese';
import Treansaction from './Components/TransactionLists';
import AddTransaction from './Components/AddTransaction';
import { GlobalProvider } from './Context/GlobalState';

function App() {
  return (
    <GlobalProvider>
     <Header/>
    <Balance/>
    <IncomeExpnese/>
    <Treansaction/>
    <AddTransaction/>

  
    </GlobalProvider>
   
    

    

  );
}

export default App;
