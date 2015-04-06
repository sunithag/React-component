var React = require('react');

var Title = React.createClass({
  render: function () {
    return (
      <p>{this.props.children}</p>
    );
  }
});

module.exports = Title;     