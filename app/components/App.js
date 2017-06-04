var React = require('react');

var AddHabit = require('../containers/AddHabit');
var Dates = require('./Dates');
var VisibleHabitList = require('../containers/VisibleHabitList');
var FilterLinks = require('./FilterLinks');

class App extends React.Component {
    render() {
        return (
            <div>
                <AddHabit />
                <Dates />
                <VisibleHabitList />
                <FilterLinks />
            </div>
        )
    }
}

module.exports = App;