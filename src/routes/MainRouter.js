import React from 'React';
import ReactDom from  'react-dom'
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import FreeAgentTracker from '../components/FreeAgentTracker';
import EditPlayer from '../components/EditPlayer';
import TestPage from '../components/TestPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';

const MainRouter = (props) => {
	return (
		<BrowserRouter>
			<div>
				<Header> Free Agent Tracker </Header>
				<Switch>
					<Route path="/profile/:userid" component={EditPlayer} exact={true}/>
					<Route path="/test/:somedata" component={TestPage} exact={true}/>
					<Route path="/" component={FreeAgentTracker} exact={true}/>
					<Route component={NotFoundPage}/>
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default MainRouter;