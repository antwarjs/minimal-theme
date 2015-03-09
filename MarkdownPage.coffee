React = require 'react'
Paths = require 'antwar-core/PathsMixin'
Router = require 'react-router'

{ div } = require 'react-coffee-elements'

module.exports = React.createClass

	displayName: 'MarkdownPage'

	mixins: [ Router.State, Paths ]

	render: ->
		page = @getPage()
		div dangerouslySetInnerHTML: __html: page.content
