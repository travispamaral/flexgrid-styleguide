import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {

	render(){
		return (
			<div className="app-header">
				<div className="row sm-align-middle">
					<div className="col">
						<Link to="/">Flexbox Grid Styleguide</Link>
					</div>
				</div>
			</div>
		)
	}

};

export default Header;
