var App= React.createClass({
  render: function() {
  	var data = [
      {id: '123', imgsrc: 'assets/images/camera.png', itemUrl: '#Name', title: 'FUJIFILM AX655 Digital Camera with 16 Megapixels and 5x Optical Zoom', price: '$450.30'},
      {id: '345', imgsrc: 'assets/images/camera.png', itemUrl: '#Name', title: 'Nikon COOLPIX L830 Digital Camera with 16 Megapixels, Zoom with 4-136mm', price: '$399.00'},
      {id: '567', imgsrc: 'assets/images/camera.png', itemUrl: '#Name', title: 'FUJIFILM COOLPIX L830 Ultra Zoom Digital Camera with 16 Megapixels', price: '$250.50'},
      {id: '789', imgsrc: 'assets/images/camera.png', itemUrl: '#Name', title: 'FUJIFILM AX655 Digital Camera with 16 Megapixels and 5x Optical Zoom', price: '$550.50'}
    ];
  	return (
      <div className="mobile-container">
        <Header/>
        <SearchResults data={data}/>
      </div>
    )
  }
});
