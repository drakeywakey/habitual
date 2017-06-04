var React = require('react');
var FilterLink = require('../containers/FilterLink');

const FilterLinks = () => (
    <p>
        Show:
        {' '}
        <FilterLink filter='SHOW_ALL'>
            All
        </FilterLink>
        {' '}
        <FilterLink filter='SHOW_GOOD'>
            Good
        </FilterLink>
        {' '}
        <FilterLink filter='SHOW_BAD'>
            Bad            
        </FilterLink>
    </p>
)

module.exports = FilterLinks;