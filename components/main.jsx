var React = require('react');

var App = require('./app.jsx');

React.render( 
 	<App url="results.json" />, 
 	document.getElementById('main')
);