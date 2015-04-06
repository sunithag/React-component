var SearchResults = React.createClass({displayName: "SearchResults",
  propTypes: {
    data: React.PropTypes.array.isRequired
  },
  render: function() {
    return (
      React.createElement("div", {className: "search-results"}, 
        React.createElement(Items, {options: this.props.data})
      )
    );
  }
});