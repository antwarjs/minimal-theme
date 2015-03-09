React = require 'react'
config = require 'config'

{ main } = require 'react-coffee-elements'


module.exports = React.createClass

	displayName: 'Body'

	render: ->
		main @props.children
