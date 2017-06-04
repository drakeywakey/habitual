var React = require('react');

var Habit = require('./Habit');

class HabitList extends React.Component {
    render() {
        let habits = [
            {
                text: 'Get up early',
                id: 0,
                good: true,
                completion: [false, false, true, false, true]
            },
            {
                text: 'bite my nails',
                id: 1,
                good: false,
                completion: [true, true, false, false, false]
            }
        ];

        return (
            <ul>
                {habits.map(habit => {
                    //return <li key={habit.id} className={habit.good ? 'good': 'bad'}>{habit.text}</li>
                    return <Habit key={habit.id} {...habit} />
                })}
            </ul>
        )
    }
}

module.exports = HabitList;