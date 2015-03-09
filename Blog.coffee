React = require('react')
Router = require('react-router')
Link = React.createFactory Router.Link
Paths = require('antwar-core/PathsMixin')
_ = require('lodash')

{ div, li, p, ul, h1, h3, span } = require 'react-coffee-elements'

module.exports = React.createClass

	displayName: 'Blog'

	mixins: [
		Router.State
		Paths
	]

	render: ->
		div {},
			h1 'Blog posts'
			ul {},
				_.map _.sortBy(@getAllPosts(), 'date').reverse(), (post) =>
					li key: post.url,
						h3 {},
							Link
								to: '/blog/' + post.url
							, post.title
							if post.draft then span ' Draft'
						post.date
						p post.preview
