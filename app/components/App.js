var React = require('react');

var AddHabitForm = require('./AddHabitForm');
var HabitList = require('./HabitList');
var Link = require('./Link');

class App extends React.Component {
    render() {
        return (
            <div>
                <AddHabitForm onSubmit={() => {}} />
                <HabitList />
                <p>Show: <Link>All</Link> | <Link>Good</Link> | <Link>Bad</Link></p>
            </div>
        )
    }
}

module.exports = App;