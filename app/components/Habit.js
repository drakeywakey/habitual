var React = require('react');

class Habit extends React.Component {
    render() {
        return (
            <li className={ this.props.good ? 'good' : 'bad' }>
                {this.props.text}
                {this.props.completion.map((done, index) => {
                    return <input key={index} type="checkbox" checked={done} onChange={(e) => {console.log(e.currentTarget.checked);}}/>
                })}
            </li>
        )
    }
}

module.exports = Habit;