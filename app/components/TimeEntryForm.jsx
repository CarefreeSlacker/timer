var React = require('react');


var TimeEntryForm = React.createClass({
    onFormSubmit: function(e) {
        e.preventDefault();

        var secondsCount = this.refs.seconds.value;

        if (secondsCount.match(/^\d+$/)) {
            this.props.setSecondsCount(parseInt(secondsCount, 10));
            this.refs.seconds.value = '';
        }
    },
    render: function(){
        return( <div class="row">
            <form ref="form" className="time-entry-form" onSubmit={this.onFormSubmit}>
                <input ref="seconds" type="text" className="time-entry-form__input"/>
                <input type="submit" value="Ок" className="button expanded"/>
            </form>
        </div>
        )
    }
});

module.exports = TimeEntryForm;
