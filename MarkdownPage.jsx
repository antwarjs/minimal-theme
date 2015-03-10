var React = require('react');
var Router = require('react-router');
var Paths = require('antwar-core/PathsMixin');

var MarkdownPage = React.createClass({

	mixins: [ Router.State, Paths ],

	render: function() {
		var page = this.getPage()
		return (
			<div dangerouslySetInnerHTML={{__html: page.content}} />
		);
	}

});

module.exports = MarkdownPage;
