var connect = require('react-redux').connect;
var HabitList = require('../components/HabitList');
var toggleHabitAtDate = require('../actions').toggleHabitAtDate;

const getVisibleHabits = (habits, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return habits;
        case 'SHOW_GOOD':
            return habits.filter(h => h.good);
        case 'SHOW_BAD':
            return habits.filter(h => !h.good);
        default:
            return habits;
    }
};

const mapStateToProps = (state) => {
    return {
        habits: getVisibleHabits(state.habits, state.visFilter)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onDateClick: (id, index) => {
            dispatch(toggleHabitAtDate(id, index))
        }
    }
}

const VisibleHabitList = connect(
    mapStateToProps,
    mapDispatchToProps
)(HabitList);

module.exports = VisibleHabitList;