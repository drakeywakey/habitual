var AddHabitForm = require('../components/AddHabitForm');
var connect = require('react-redux').connect;
var addHabit = require('../actions').addHabit;

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (text, good) => {
            dispatch(addHabit(text, good))
        }
    }
}

let AddHabit = connect(null, mapDispatchToProps)(AddHabitForm);

module.exports = AddHabit;