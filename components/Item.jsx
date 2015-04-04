var Item = React.createClass({
	render: function () {
		return (
      <li className="result-item">
        <div className="left">
          <ProductImage imgsrc="assets/images/camera.png"></ProductImage>
        </div>
        <div className="right product-details">
          <div className="product-title">
            <Price anchor="#Name">
              $450.30
            </Price>
            <Title>FUJIFILM AX655 Digital Camera with 16 Megapixels and 5x Optical Zoom</Title>
          </div>
        </div>
      </li>
		);
	}
});   

