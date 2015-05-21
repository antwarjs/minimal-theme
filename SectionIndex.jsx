var React = require('react');
var Router = require('react-router');
var Paths = require('antwar-core/PathsMixin');
var BlogLink = require('antwar-core/BlogLink');
var _ = require('lodash');

var Link = Router.Link;

var Blog = React.createClass({

  mixins: [ Router.State, Paths ],
  render: function() {
    var items = _.map(_.sortBy(this.getAllItems(), 'date').reverse(), function(item, i) {
      return <li key={'item-' + i}>
        <h3>
          <BlogLink item={item}>{item.title}</BlogLink>
          {item.draft ? <span>Draft</span> : null}
        </h3>

        <span>{item.date}</span>
        <p>{item.preview}</p>
      </li>
    });
    return (
      <div>
        <h1>Blog Items</h1>
        <ul>{items}</ul>
      </div>
    );
  }

});

module.exports = Blog;
