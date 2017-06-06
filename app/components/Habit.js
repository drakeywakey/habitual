var React = require('react');

let Habit = ({ onDateClick, good, text, completion, id }) => (
    <li className={ good ? 'good' : 'bad' }>
        {text}
        {completion.map((done, index) => {
            return <input key={index} type="checkbox" checked={done} onChange={() => { onDateClick(id, index); }}/>
        })}
    </li>
)

module.exports = Habit;