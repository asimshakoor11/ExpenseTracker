
import "./ExpenseItem.css";

import React from 'react';


import ExpenseDate from "./ExpenseDate";

import Card from "../UI/Card";

const ExpenseItem = (props) => {

  // // use state is a function
  // //ek by default value dena hota h 
  // //usestate return krta h two things ek variable and one function
  // //actually ye use hota h inner html ko change krny ke ley document.get.. etc ki jaga
  // //here we used array destructing

  // const [newTitle, setNewTitle] = useState("");
  

  // const [title, setTitle] = useState(props.title);

  // const clickHandler = () => {
  //   setTitle(newTitle);
  // }

  // //runtime pe o change ho ga inout box m wo update ho ga
  // const changeHandler = (event) =>{
  //   setNewTitle(event.target.value);
  // }

  return (
    <Card className="expense-item">
      <ExpenseDate date={new Date(props.date)} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        {/* <h2>{title}</h2> */}
        <div className="expense-item__price">Rs: {props.amount}</div>
      </div>
      {/* <input type="text" value={newTitle} onChange={changeHandler}/>
      <button onClick={clickHandler}>Change Title</button> */}
    </Card>
  );
}

export default ExpenseItem;
