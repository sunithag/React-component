var Items = React.createClass({
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