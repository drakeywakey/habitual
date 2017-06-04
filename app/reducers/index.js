var combineReducers = require('redux').combineReducers;
var habits = require('./habits');
var visFilter = require('./visFilter');

const habitApp = combineReducers({
    habits: habits,
    visFilter: visFilter
});

module.exports = habitApp;