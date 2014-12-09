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
              React.createElement("h1", null, "Comments"), 
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

      // Render our reactComponent
      React.render(
        React.createElement(CommentBox, null),
        document.getElementById('recent-comments')
      );

    }
  }

})(jQuery);