import React from 'react';
import ExpenseItem from './ExpenseItem';

const ExpenseList = () => {
    const expenses = [
        {
            id: 12123213,
            name: "Shopping",
            cost: 50
        },
        {
            id: 12123213,
            name: "Holiday",
            cost: 300
        },
        {
            id: 12123213,
            name: "Transportation",
            cost: 70
        },
        {
            id: 12123213,
            name: "Fuel",
            cost: 40
        },
        {
            id: 12123213,
            name: "Child Care",
            cost: 500
        },
    ];

    return (
        <ul className='list-group'>
           {expenses.map((expense) => (
               <ExpenseItem
               id={expense.id}
               name={expense.name}
               cost={expense.cost} />
           ))}
        </ul>
    )
}

export default ExpenseList;
