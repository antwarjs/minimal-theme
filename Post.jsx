var React = require('react');
var Paths = require('antwar-core/PathsMixin');
var Router = require('react-router');
var config = require('config');

var Post = React.createClass({

  mixins: [ Router.State, Paths ],

  render: function() {
    var post = this.getPost()
    var author = post.author ? post.author : config.site.author.name
    return (
      <div>
        <h1>{post.title}</h1>
        <div>
          {post.draft ? <span>Draft</span> : null}
          <div dangerouslySetInnerHTML={{__html: post.content}} />
        </div>
        {post.date}
        {author ? <span>Authored by {author}</span> : null}
      </div>
    );
  }

});

module.exports = Post;
