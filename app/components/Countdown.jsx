var React = require('react');
var Clock = require('Clock');
var TimeEntryForm = require('TimeEntryForm');

var Countdown = React.createClass({
    getInitialState: function(){
        return(
            {
                secondsCount: 0,
                status: 'stopped'
            }
        )
    },
    componentDidUpdate: function(prevProps, prevState) {
        if (this.state.status != prevState.status) {
            switch(this.state.status) {
                case 'started':
                     this.startTimer();
                     break;
            }
        }
    },
    startTimer: function() {
        var object = this;
        this.timer = setInterval(() => {
            var newSeconds = object.state.secondsCount - 1;
            object.setState({
                secondsCount: newSeconds >= 0 ? newSeconds : 0
            })
        }, 1000)
    },
    setSecondsCount: function(count) {
        this.setState({
            secondsCount: count,
            status: 'started'
        });
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

module.exports = Countdown;
