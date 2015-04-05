var App= React.createClass({displayName: "App",
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
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
  handleSearchSubmit: function(searchterm) {
    this.props.url = "results-" + searchterm + ".json";
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      type: 'GET',
      data: searchterm,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
       console.error(this.props.url, status, err.toString()); 
      }.bind(this)
    });
  },
  render: function() {
    return (
      React.createElement("div", {className: "mobile-container"}, 
        React.createElement(Header, {onSearchSubmit: this.handleSearchSubmit}), 
        React.createElement(SearchResults, {data: this.state.data})
      )
    )
  }
});
