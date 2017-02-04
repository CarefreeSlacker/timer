var React = require('react');
var Navigation = require('Navigation');

var Main = (props) => {
    return (
        <div>
            <Navigation/>
            <div className="row">
                <div className="small-2 small-offset-5">
                    { props.children }
                </div>
            </div>
        </div>
    )
}

module.exports = Main;
