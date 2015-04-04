var Price = React.createClass({
  propTypes: {
    anchor: React.PropTypes.string.isRequired,
    children: React.PropTypes.node
  },
  render: function () {
    return (
      <a href={this.props.anchor}>
        {this.props.children}
      </a>
    );
  }
});             