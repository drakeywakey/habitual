const habit = (state, action) => {
    switch (action.type) {
        case 'ADD_HABIT':
            return {
                id: action.id,
                text: action.text,
                good: action.good,
                completion: [false, false, false, false, false]
            };
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
        default:
            return state;
    }
}

module.exports = habits;