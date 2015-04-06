var React = require('react');

var ProductImage = require('./productImage.jsx');
var Price = require('./price.jsx');
var Title = require('./title.jsx');

var Items = React.createClass({
  propTypes: {
    options: React.PropTypes.array.isRequired
  },
  render: function () {
    return (
      <ul>
        {this.props.options.map(function (option) {
          return (
            <li className="result-item" key={option.id}>
              <div className="left">
                <ProductImage imgsrc={option.imgsrc}></ProductImage>
              </div>
              <div className="right product-details">
                <div className="product-title">
                  <Price anchor={option.itemUrl}>
                    {option.price}
                  </Price>
                  <Title>{option.title}</Title>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
});
module.exports = Items;