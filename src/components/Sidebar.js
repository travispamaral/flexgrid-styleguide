import React  from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => (
	<div className="app-sidebar">
		<ul>
			{/*<li className="header">Grid</li>*/}
			<li className="has-sub"><NavLink to="/grid">The Grid</NavLink>
				<ul>
					<li><NavLink activeClassName="active" to="/flexed">Flexed Grid</NavLink></li>
					<li><NavLink activeClassName="active" to="/fixed">Fixed Grid</NavLink></li>
				</ul>
			</li>

			<li><NavLink activeClassName="active" to="/pushed">Pushed Grid</NavLink></li>
			<li><NavLink activeClassName="active" to="/alignment">Alignment</NavLink></li>
			<li><NavLink activeClassName="active" to="/Visibility">Visibility</NavLink></li>
			<li className="header">Settings</li>
			<li><NavLink activeClassName="active" to="/settings">Settings File</NavLink></li>
		</ul>
	</div>
);

export default Sidebar;
