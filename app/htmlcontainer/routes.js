import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import App from './containers/App';
import Login from './containers/login';
import UploadAssets from './containers/uploadassets';
import SignUp from './containers/signup';
import ForgotPassword from './containers/forgotpassword';
import UnAuthorised from './containers/unauthorised';

export default () => {
	return (
		<BrowserRouter>
			<Switch>
			  <Route exact path='/' component={App}/>
				<Route path='/login' component={Login}/>
				<Route path='/signup' component={SignUp}/>
				<Route path='/forgotpassword' component={ForgotPassword}/>
				<Route path='/uploadassets' component={UploadAssets}/>
				<Route path='/unauthorised' component={UnAuthorised}/>
			</Switch>
		</BrowserRouter>
	)
}
