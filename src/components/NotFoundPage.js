import React from 'react';
import { Link } from 'react-router-dom';

class NotFoundPage extends React.Component {
	render() {
		return (
			<div>
				<h1>Page Not Found!</h1>
				<Link to="/">Back to the Homepage</Link><br/>
				<Link to="/test">Back to the Test Page</Link><br/>
			</div>
		);
	}
}

export default NotFoundPage;