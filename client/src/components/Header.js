import React, { Component } from "react";
//import { connect } from "react-redux";

class Header extends Component {
	render() {
		return (
			<nav>
				<div className='nav-wrapper'>
					<a href='/login' className='left brand-logo'>
						OutBox
					</a>
					<ul className='right'>
						<li>
							<a href='/njjj'>Login with Google</a>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}

// const mapStateToProps = state => {
// 	console.log({ state });
// 	// return { auth };
// };

export default Header;
