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
        render: function() {
          return (
            React.createElement("div", {className: "commentBox"}, 
              React.createElement("h3", null, React.createElement("b", null, "Check them out!")), 
              React.createElement(CommentList, null)
            )
          );
        }
      });

      var CommentList = React.createClass({displayName: 'CommentList',
        render: function() {
          return (
            React.createElement("div", {className: "commentList"}, 
              "Hello, world! I am a CommentList."
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

      var data = $.ajax({
        dataType: "json",
        url: '../api/v1/comment.json',
        data: data,
        // success: success
      });
      console.log(data.data);

      // Render our reactComponent
      React.render(
        React.createElement(CommentBox, null),
        document.getElementById('recent-comments')
      );

    }
  }

})(jQuery);