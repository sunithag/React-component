var Header= React.createClass({displayName: "Header",
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
      React.createElement("header", null, 
        React.createElement("div", {className: "homepage-header"}, 
          React.createElement("img", {src: "http://localhost:8000/assets/images/header.jpg", alt: "Walmart Header"})
        ), 
        React.createElement("nav", null, 
          React.createElement("div", null, 
            React.createElement("input", {type: "text", placeholder: "Search", ref: "searchterm"}), 
            React.createElement("button", {onClick: this.handleSubmit}, "Search")
          )
        )
      )
    )
  }
});