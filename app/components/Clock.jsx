var React = require('react');

var Clock = React.createClass({
    formatTime: function(seconds_count){
        var seconds = seconds_count % 60;
        var minutes = Math.round(seconds_count / 60);

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
        <div>
            Clock component
        </div>
      )
    }
});

module.exports = Clock;
