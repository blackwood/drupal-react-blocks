/**
 * @file
 * Main JS file for react functionality.
 *
 */

(function ($) {

  Drupal.behaviors.react_blocks = {
    attach: function (context) {

      // A div with some text in it
      var CommentBox = React.createClass({displayName: 'CommentBox',

      loadCommentsFromServer: function() {
        $.ajax({
          url: this.props.url,
          dataType: 'json',
          success: function(data) {
            this.setState({data: data});
          }.bind(this),
          error: function(xhr, status, err) {
            console.error(this.props.url, status, err.toString());
          }.bind(this)
        });
      },

      getInitialState: function() {
        return {data: []};
      },

      componentDidMount: function() {
        this.loadCommentsFromServer();
        setInterval(this.loadCommentsFromServer, this.props.pollInterval);
      },

      render: function() {
          return (
            React.createElement("div", {className: "commentBox"}, 
              React.createElement("h3", null, React.createElement("b", null, "Check them out!")), 
              React.createElement(CommentList, {data: this.state.data})
            )
          );
        }
      });

      var CommentList = React.createClass({displayName: 'CommentList',
        render: function() {
          var commentNodes = this.props.data.map(function (comment) {
            return (
              React.createElement(Comment, {author: comment.name}, 
                comment.subject
              )
            );
          });
          return (
            React.createElement("div", {className: "commentList"}, 
              commentNodes
            )
          );
        }
      });

      var Comment = React.createClass({displayName: 'Comment',
        render: function() {
          return (
            React.createElement("div", {className: "comment"}, 
              React.createElement("h2", {className: "commentAuthor"}, 
                this.props.name
              ), 
              this.props.subject
            )
          );
        }
      });

      // Render our reactComponent
      React.render(
        React.createElement(CommentBox, {url: "../api/v1/comment.json", pollInterval: 2000}),
        document.getElementById('recent-comments')
      );

    }
  }

})(jQuery);