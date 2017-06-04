var connect = require('react-redux').connect;
var HabitList = require('../components/HabitList');

const getVisibleHabits = () => {
};

const mapStateToProps = (state) => {
    return {
        habits: state.habits
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

const VisibleHabitList = connect(
    mapStateToProps,
    mapDispatchToProps
)(HabitList);

module.exports = VisibleHabitList;