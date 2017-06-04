var React = require('react');

var AddHabitForm = require('./AddHabitForm');
var Link = require('./Link');

class App extends React.Component {
    render() {
        return (
            <div>
                <AddHabitForm onSubmit={() => {}} />
                <p>Show: <Link>All</Link> | <Link>Good</Link> | <Link>Bad</Link></p>
            </div>
        )
    }
}

module.exports = App;