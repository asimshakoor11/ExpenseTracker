
import "./Expenses.css";

import React from 'react';


import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

const Expenses = (props) => {
  
  return (
    <Card className="expenses">

      {
        //jb loop m kesi component ko dkha rahay ho to key rakhna must h
        props.item.map(
          expense => (
            <ExpenseItem
            key = {expense.id}
            date={expense.date}
            title={expense.title}
            amount={expense.amount}/>    
          )
        )
      }

    </Card>
  );
}

export default Expenses;
