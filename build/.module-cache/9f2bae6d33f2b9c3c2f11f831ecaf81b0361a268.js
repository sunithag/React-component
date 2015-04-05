var Header= React.createClass({displayName: "Header",
  render: function() {
    return (
      React.createElement("header", null, 
        React.createElement("div", {className: "homepage-header"}, 
          React.createElement("img", {src: "assets/images/header.jpg", alt: "Walmart Header"})
        ), 
        React.createElement("nav", null, 
          React.createElement("div", null, 
            React.createElement("input", {type: "text", placeholder: "Search"}), 
            React.createElement("button", null, "Search")
          )
        )
      )
    )
  }
});