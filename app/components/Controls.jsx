var React = require('react');

var Controls = React.createClass({
    propTypes: function() {
        return ({
            state: React.PropTypes.string.isRequired(),
            onStateChange: React.PropTypes.func.isRequired()
        })
    },
    changeComponentState: function(state) {
        return () => {
            return this.props.onStateChange(state)
        }
    },
    render: function() {
        var { state } = this.props;
        var controlButton = () => {
            if (state == 'started') {
                return <button className="button alert" onClick={this.changeComponentState('paused')}>Pause</button>
            } else if (state == 'paused') {
                return <button className="button success" onClick={this.changeComponentState('started')}>Start</button>
            }
        }

        return (
            <div className="controls">
                { controlButton() }
                <button className="button secondary" onClick={this.changeComponentState('cancelled')}>Cancel</button>
            </div>
        )
    }
});

module.exports = Controls;
