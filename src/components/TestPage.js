import React from 'react';

class TestPage extends React.Component {
	render() {
		return (
			<div>
				<h1>This is the test Page!</h1>
				<p>
					This is your data: {this.props.match.params.somedata}
				</p>
			</div>
		);
	}
}

export default TestPage;