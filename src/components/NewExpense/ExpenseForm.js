

import React, { useState, useEffect } from "react";

import './ExpenseForm.css';

const ExpenseForm = (props) => {

    let initExpense;
    if (localStorage.getItem("expenses") === null) {
        initExpense = [];
    }
    else {
        initExpense = JSON.parse(localStorage.getItem("expenses"))
    }

    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
    }

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)

    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
    }

    const submitHandler = (event) => {
        if (enteredTitle === "" || enteredAmount === "" || enteredDate === "") {
            alert("Please Enter All Details!")
        }

        else {           

            event.preventDefault();

            const expenseData = {
                title: enteredTitle,
                amount: enteredAmount,
                date: new Date(enteredDate)
            }

            props.onsaveExpenseData(expenseData);

            let sno;
            if (expenses.length === 0) {
                sno = 0;
            }
            else {
                sno = expenses[expenses.length - 1].sno + 1;
            }
            const myExpense = {
                sno: sno,
                title: enteredTitle,
                amount: enteredAmount,
                date: enteredDate,

            }
            setExpenses([...expenses, myExpense]);
            console.log(myExpense);

            setEnteredTitle('');
            setEnteredAmount('');
            setEnteredDate('');
        }

    };

    const [expenses, setExpenses] = useState(initExpense);

    useEffect(() => {
        localStorage.setItem("expenses", JSON.stringify(expenses));
    }, [expenses])

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={enteredDate} onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;