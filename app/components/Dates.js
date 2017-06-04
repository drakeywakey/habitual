var React = require('react');

class Dates extends React.Component {
    render() {
        var days = [4, 3, 2, 1, 0];
        return (
            <div>
                {
                    days.map((day) => {
                        let today = new Date((new Date()).setHours(-24 * day));
                        return <span key={day}>{today.toDateString()}|||--|||</span>
                    })
                }
            </div>
        )
    }
}

module.exports = Dates;