var React = require('react');

var Main = React.createCLass({
	render : function(){
		return (
			<div>
				Hello word
			</div>
		)
	}
});

React.render(<Main />, document.getElementById('app'))