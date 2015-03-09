React = require 'react'

{ main } = require 'react-coffee-elements'


module.exports = React.createClass

	displayName: 'Body'

	render: ->
		main @props.children
