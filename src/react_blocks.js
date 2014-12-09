/**
 * @file
 * Main JS file for react functionality.
 *
 */

(function ($) {

  Drupal.behaviors.react_blocks = {
    attach: function (context) {

      // A div with some text in it
      var CommentBox = React.createClass({

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
            <div className="commentBox">
              <h3><b>Check them out!</b></h3>
              <CommentList data={this.state.data} />
            </div>
          );
        }
      });

      var CommentList = React.createClass({
        render: function() {
          var commentNodes = this.props.data.map(function (comment) {
            return (
              <Comment name={comment.name} subject={comment.subject}>
                {comment.subject}
              </Comment>
            );
          });
          return (
            <div className="commentList">
              {commentNodes}
            </div>
          );
        }
      });

      var Comment = React.createClass({
        render: function() {
          return (
            <div className="comment">
              <h2 className="commentAuthor">
                {this.props.name}
              </h2>
              {this.props.subject}
            </div>
          );
        }
      });

      // Render our reactComponent
      React.render(
        <CommentBox url="/api/v1/comment.json" pollInterval={2000} />,
        document.getElementById('recent-comments')
      );

    }
  }

})(jQuery);