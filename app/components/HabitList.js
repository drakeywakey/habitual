var React = require('react');
var PropTypes = require('prop-types');
var Habit = require('./Habit');

const HabitList = ({ habits, onDateClick }) => {
    return (
        <ul>
            {habits.map(habit => {
                return <Habit key={habit.id} {...habit} onDateClick={onDateClick}/>
            })}
        </ul>
    );
}

module.exports = HabitList;