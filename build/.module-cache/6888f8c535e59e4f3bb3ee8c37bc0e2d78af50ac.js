var ProductImage = React.createClass({displayName: "ProductImage",
  render: function () {
    return (
      React.createElement("a", {href: "#", className: "product-image"}, 
        React.createElement("img", {src: this.props.imgsrc, alt: "product-image"})
      )
    );
  }
}); 