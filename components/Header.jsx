var React = require('react');

var Header= React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    var text = React.findDOMNode(this.refs.searchterm).value.trim();
    if(!text) {
      return;
    }
    this.props.onSearchSubmit(text);
    React.findDOMNode(this.refs.searchterm).value = '';
    return;
  },
  render: function() {
    return (
      <header>
        <div className="homepage-header">
          <img src="http://localhost:8000/assets/images/header.jpg" alt="Walmart Header"/>
        </div>
        <nav>
          <div>
            <input type="text" placeholder="Search" ref="searchterm"/>
            <button onClick={this.handleSubmit}>Search</button>
          </div>
        </nav>
      </header>
    )
  }
});

module.exports = Header;