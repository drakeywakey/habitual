var React = require('react');
var PropTypes = require('prop-types');
var Habit = require('./Habit');

const HabitList = ({ habits }) => {
    return (
        <ul>
            {habits.map(habit => {
                return <Habit key={habit.id} {...habit} />
            })}
        </ul>
    );
}

module.exports = HabitList;