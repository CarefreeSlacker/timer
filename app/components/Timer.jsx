var React = require('react');
var Clock = require('Clock');
var TimeEntryForm = require('TimeEntryForm');


var Timer = React.createClass({
    getInitialState: function(){
        return(
            {
                secondsCount: 0
            }
        )
    },
    setSecondsCount: function(count) {
        this.setState({secondsCount: count});
    },
    render: function() {
        return (
            <div>
                <Clock secondsCount={this.state.secondsCount}/>
                <TimeEntryForm setSecondsCount={this.setSecondsCount}/>
            </div>
        )
    }
});

module.exports = Timer;
