let nextHabitId = 0;

export const addHabit = (text, good) => {
    return {
        type: 'ADD_HABIT',
        id: nextHabitId++,
        text: text,
        good: good
    }
}

export const setVisFilter = (filter) => {
    return {
        type: 'SET_VIS_FILTER',
        filter: filter
    }
}