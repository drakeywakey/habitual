var React = require('React')
var PropTypes = require('prop-types');

let AddHabitForm = ({ onSubmit }) => {
    let input, good;

    return (
        <div>
            <form onSubmit={ e => {
                    e.preventDefault();
                    if (!input.value.trim()) { good.checked = true; return; }
                    onSubmit(input.value, good.checked);
                    input.value = '';
                    good.checked = true;
                }}>
                <input ref={ node => input = node } />
                <button type='submit'>Add Habit</button>
                <input ref={ node => good = node } name='habitType' type='radio' value='Good' defaultChecked/>Good
                <input type='radio' name='habitType' value='Bad'/>Bad
            </form>
        </div>
    )
}

AddHabitForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
}

module.exports = AddHabitForm;