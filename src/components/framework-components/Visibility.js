import React from 'react';
import Highlight from 'react-highlight';

import 'highlight.js/styles/github.css';

const Visibility = () => (
	<div className="grid">

		<div className="content">
			<h2>Visibility</h2>
			<p>You can show or hide elements based on screen size by easily applying these classes.</p>

      <p>To hide elements use the following .hide classes</p>
		</div>

		<Highlight className="html">
{
`
<!-- hide on all screens -->
<div class="hide"></div>

<!-- hide on small screens only -->
<div class="hide-for-sm"></div>

<!-- hide on medium screens only -->
<div class="hide-for-md"></div>

<!-- hide on large screens only -->
<div class="hide-for-lg"></div>
`
}
		</Highlight>

		<div className="content">
			<p>To show classes only for specific screen sizes use the following .show classes.</p>
		</div>

		<Highlight className="html">
{`
<!-- show on small screens only -->
<div class="show-for-sm"></div>

<!-- show on medium screens only -->
<div class="show-for-md"></div>

<!-- show on large screens only -->
<div class="show-for-lg"></div>
`}
		</Highlight>


	</div>
);

export default Visibility;
