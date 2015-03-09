React = require 'react'
Paths = require 'antwar-core/PathsMixin'
Router = require 'react-router'
config = require 'config'

{ div, span, header, h1 } = require 'react-coffee-elements'

module.exports = React.createClass

	displayName: 'Post'

	mixins: [ Router.State, Paths ]

	render: ->
		post = @getPost()
		author = post.author or config.site.author
		div {},
			h1 post.title
			div {},
				if post.draft then span ' Draft'
				div dangerouslySetInnerHTML: __html: post.content
			post.date
			if author then div "Authored by #{author}"
