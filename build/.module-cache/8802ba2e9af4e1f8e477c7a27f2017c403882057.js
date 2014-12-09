/**
 * @file
 * Main JS file for react functionality.
 *
 */

(function ($) {

  Drupal.behaviors.react_blocks = {
    attach: function (context) {

      // A div with some text in it
      var ReactiveComments = React.createClass({displayName: 'ReactiveComments',
        render: function() {
          return (
            React.createElement('div', {className: "ReactiveComments"},
              "Hello, world! I am a ReactiveComments."
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
        React.createElement(ReactiveComments, null),
        document.getElementById('recent-comments')
      );

    }
  }

})(jQuery);