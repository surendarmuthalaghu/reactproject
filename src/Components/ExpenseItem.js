import './ExpenseItem.css';

function ExpenseItem(props) {
    const month = props.date.toLocalString('en-us', { month: 'long' });
    const day = props.date.toLocalString('en-us', { day: '2-digit'});
    const year = props.date.getFullYear();

    return (
        <div  className='expense-Item'>
            <div>
            <div>{month}</div>
            <div>{year}</div>
            <div>{day}</div>
            </div>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__Price'>${props.amount}</div>
            </div>
        </div >
    );
}

export default ExpenseItem;