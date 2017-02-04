var React = require('react');
var Clock = require('Clock');
var TimeEntryForm = require('TimeEntryForm');

var Controls = require('Controls');

var Countdown = React.createClass({
    getInitialState: function(){
        return(
            {
                secondsCount: 0,
                countdownStatus: 'cancelled'
            }
        )
    },
    componentDidUpdate: function(prevProps, prevState) {
        if (this.state.countdownStatus != prevState.countdownStatus) {
            switch(this.state.countdownStatus) {
                case 'started':
                    this.startTimer();
                    break;
                case 'cancelled':
                    this.setState({ secondsCount: 0 })
                case 'paused':
                    clearInterval(this.timer);
                    this.timer = undefined;
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

            if(newSeconds === 0) {
                object.setState({ countdownStatus: 'cancelled' })
            }
        }, 1000)
    },
    setSecondsCount: function(count) {
        this.setState({
            secondsCount: count,
            countdownStatus: 'started'
        });
    },
    changeStatus: function(state) {
        this.setState({
            countdownStatus: state
        })
    },
    render: function() {
        var { secondsCount, countdownStatus } = this.state;
        var renderControls = () => {
            if(countdownStatus != 'cancelled') {
                return <Controls onStateChange={this.changeStatus} state={countdownStatus}/>
            } else {
                return <TimeEntryForm setSecondsCount={this.setSecondsCount}/>
            }
        }

        return (
            <div>
                <h1 class="header-text">Countdown app</h1>
                <Clock secondsCount={secondsCount}/>
                { renderControls() }
            </div>
        )
    }
});

module.exports = Countdown;
