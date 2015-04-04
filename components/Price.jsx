var Price = React.createClass({
	render: function () {
		return (
			<a href={this.props.anchor}>
			  {this.props.children}
			</a>
		);
	}
});             