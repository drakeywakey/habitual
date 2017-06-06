const habit = (state, action) => {
    switch (action.type) {
        case 'ADD_HABIT':
            return {
                id: action.id,
                text: action.text,
                good: action.good,
                completion: [false, false, false, false, false]
            };
        case 'TOGGLE_HABIT_AT_DATE':
            if (state.id !== action.id) {
                return state;
            }

            let completion = state.completion;
            completion[action.date] = !completion[action.date]
            return Object.assign({}, state, { completion: completion });
        default:
            return state;
    }
}

const habits = (state = [], action) => {
    switch (action.type) {
        case 'ADD_HABIT':
            return [
                ...state,
                habit(null, action)
            ];
        case 'TOGGLE_HABIT_AT_DATE':
            return state.map(h => habit(h, action));
        default:
            return state;
    }
}

module.exports = habits;