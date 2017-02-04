var React = require('react');

var Clock = React.createClass({
    getDefaultProps: function(){
        return {
            secondsCount: 0
        };
    },
    propTypes: function(){
        secondsCount: React.PropTypes.number;
    },
    formatTime: function(secondsCount){
        var seconds = secondsCount % 60;
        var minutes = Math.round(secondsCount / 60);

        if ( seconds < 10 ) {
            seconds = '0' + seconds;
        }

        if ( minutes < 10 ) {
            minutes = '0' + minutes;
        }

        return minutes + ':' + seconds;
    },
    render: function(){
      return (
        <div className="clock row">
            <div className="clock-text">
                {this.formatTime(this.props.secondsCount)}
            </div>
        </div>
      )
    }
});

module.exports = Clock;
