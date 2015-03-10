var React = require('react');

var Body = React.createClass({

	render: function() {
		return (
			<main>{this.props.children}</main>
		);
	}

});

module.exports = Body;
