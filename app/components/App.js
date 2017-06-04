var React = require('react');

var AddHabit = require('../containers/AddHabit');
var Dates = require('./Dates');
var VisibleHabitList = require('../containers/VisibleHabitList');
var Link = require('./Link');

class App extends React.Component {
    render() {
        return (
            <div>
                <AddHabit />
                <Dates />
                <VisibleHabitList />
                <p>Show: <Link>All</Link> | <Link>Good</Link> | <Link>Bad</Link></p>
            </div>
        )
    }
}

module.exports = App;