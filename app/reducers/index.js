var combineReducers = require('redux').combineReducers;
var habits = require('./habits');

const habitApp = combineReducers({
    habits: habits
});

module.exports = habitApp;