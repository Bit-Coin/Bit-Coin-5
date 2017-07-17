var React = require('react');
var Accounts = require('Accounts');

var Main = (props) => {
	return (
		<div>
			<Accounts />
			{props.children}
		</div>
	)
};

module.exports = Main;