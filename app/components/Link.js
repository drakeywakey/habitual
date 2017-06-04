var React = require('React');

class Link extends React.Component {
    render() {
        return (
            <a href='#'>
                {this.props.children}
            </a>
        )
    }
}

module.exports = Link;