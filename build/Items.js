var Items = React.createClass({displayName: "Items",
  propTypes: {
    options: React.PropTypes.array.isRequired
  },
  render: function () {
    return (
      React.createElement("ul", null, 
        this.props.options.map(function (option) {
          return (
            React.createElement("li", {className: "result-item", key: option.id}, 
              React.createElement("div", {className: "left"}, 
                React.createElement(ProductImage, {imgsrc: option.imgsrc})
              ), 
              React.createElement("div", {className: "right product-details"}, 
                React.createElement("div", {className: "product-title"}, 
                  React.createElement(Price, {anchor: option.itemUrl}, 
                    option.price
                  ), 
                  React.createElement(Title, null, option.title)
                )
              )
            )
          );
        })
      )
    );
  }
});