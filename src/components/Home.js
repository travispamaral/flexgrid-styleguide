import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
	<div>

		<div className="row">
			<div className="col">
				<h1>Welcome to my Flexbox Grid Styleguide!</h1>
				<p>This is a lightweight flexible grid framework built to replace 3rd party bloated options.</p>
				<p>Take a look around using the menu to the left. If you would like to check out the source code or crete a Pull Request click <a href="https://github.com/travispamaral/flexgrid-styleguide" target="_blank">here</a>.</p>
			</div>
		</div>

		<div className="row">
			<div className="col">
				<h4>To get started</h4>
				<p>Git clone or copy <code>git@github.com:travispamaral/flexgrid-styleguide.git</code></p>
				<p>Once installed into your project, remove any demo code and set your settings in <code>scss/utilities/_settings.scss</code></p>
				<p>Checkout the settings file <Link to="/settings">here</Link></p>
			</div>
		</div>

	</div>
);

export default Home;
