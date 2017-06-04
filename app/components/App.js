var React = require('react');

var AddHabitForm = require('./AddHabitForm');

class App extends React.Component {
    render() {
        return (
            <div>Hello, React!
                <AddHabitForm onSubmit={() => {}} />
            </div>
        )
    }
}

module.exports = App;