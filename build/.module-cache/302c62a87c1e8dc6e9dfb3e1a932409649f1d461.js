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
              "Hello, world! I am a CommentBox."
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