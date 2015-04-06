var Price = React.createClass({displayName: "Price",
  propTypes: {
    anchor: React.PropTypes.string.isRequired,
    children: React.PropTypes.node
  },
  render: function () {
    return (
      React.createElement("a", {href: this.props.anchor}, 
        this.props.children
      )
    );
  }
});             