var React = require('react');
var ReactDOM = require('react-dom');
var Provider = require('react-redux').Provider;
var createStore = require('redux').createStore;
var App = require('./components/App');

var habitApp = require('./reducers');

require('./index.css');

let store = createStore(habitApp);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);
