var Title = React.createClass({displayName: "Title",
  render: function () {
    return (
      React.createElement("p", null, this.props.children)
    );
  }
});    