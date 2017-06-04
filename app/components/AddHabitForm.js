var React = require('React')
var PropTypes = require('prop-types');

class AddHabitForm extends React.Component {
    render() {
        return (
            <div>
                <input ref={ node => { this.input = node; }} />
                <button onClick={ function() { alert(this.input.value); alert(this.good.checked); }.bind(this) }>Add Habit</button>
                <input ref={ node => { this.good = node; }} type='radio' name='habitType' value='Good' defaultChecked/>Good
                <input type='radio' name='habitType' value='Bad'/>Bad
            </div>
        )
    }
}

AddHabitForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
}

module.exports = AddHabitForm;