var React = require('react');
var Clock = require('Clock');

var Timer = React.createClass({
    render: function() {
        return <Clock secondsCount={77}/>
    }
});

module.exports = Timer;
