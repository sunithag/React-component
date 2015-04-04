var SearchResults = React.createClass({
  propTypes: {
    data: React.PropTypes.array.isRequired
  },
  render: function() {
    return (
      <div className="search-results">
        <Items options={this.props.data} />
      </div>
    );
  }
});