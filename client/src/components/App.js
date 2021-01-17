import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Landing from "./Landing";
import Dashboard from "./Dashboard";
import SurveyNew from "./SurveyNew";
import Header from "./Header";
import { connect } from "react-redux";
import * as actions from "../actions";

class App extends Component {
	componentDidMount() {
		this.props.fetchUser();
	}
	render() {
		return (
			<div>
				<BrowserRouter>
					<div>
						<Header />
						<div className='container'>
							<Route path='/' exact component={Landing} />
							<Route path='/surveys' exact component={Dashboard} />
							<Route path='/surveys/new' component={SurveyNew} />
						</div>
					</div>
				</BrowserRouter>
			</div>
		);
	}
}

export default connect(null, actions)(App);
