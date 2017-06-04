var connect = require('react-redux').connect;
var setVisFilter = require('../actions').setVisFilter;
var Link = require('../components/Link');

const mapStateToProps = (state, ownProps) => {
    return {
        active: ownProps.filter === state.visFilter
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(setVisFilter(ownProps.filter))
        }
    }
}

const FilterLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Link);

module.exports = FilterLink;