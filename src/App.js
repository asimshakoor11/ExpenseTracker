import Expenses from "./components/Expenses/Expenses";

import React, { useState, useEffect } from "react";

import NewExpense from "./components/NewExpense/NewExpense";

// let DUMMY_Expense = [
//   {
//     id: "e3",
//     title: "House Rent",
//     amount: 400,
//     date: new Date(2021, 5, 21),
//   },
// ];


const App = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    // Retrieve from local storage
    const storedArray = JSON.parse(localStorage.getItem('expenses'));

    // Update state if there's anything stored
    if (storedArray) {
      setExpenses(storedArray);
    }
  }, []);
  /*
  function fetchData() {
    fetch("http://localhost/sample-api/api/read.php")
      .then((reponse) => {
        return Response.json();
      })
      .then((data) => {
        setExpenses(data);
      });
  }
  */

  // php fetch data get and post data etc..
  // the purpose of useeffect hook is to stop repetion 1 arrow func and 1 blank array

  /*
  useeffect(() => {
    fetchData();   
  }, []);
  */

  const addExpenseHandler = (expense) => {
    const updateExpense = [expense, ...expenses];
    setExpenses(updateExpense);

    /*

    //fetching from database
    fetch('http://localhost/sample-api/api/create.php', {
      method: 'POST',
      body: JSON.stringify(expense),
      headers: {
        'content-Type': 'application/json'
      }
    }).then(
      response => {
        fetchData();
      }
      );

      */
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses item={expenses} />
    </div>
  );
};

export default App;
