import React from 'react';
import { Link } from 'react-router-dom';

import Highlight from 'react-highlight';
import 'highlight.js/styles/github.css';

const Grid = () => (
	<div className="grid">

		<div className="content">
			<h2>Grid Details</h2>
			<p>Whether you decide to use the fixed percentage grid or the auto flexed grid some basic styles and basics apply to both.</p>
      <h3>Container</h3>
      <p>The container is not a required class however when added it centers your content on the page inside a max width. This helps keep control of your content and keeps it from spanning across the entire page. To add a container just add <code>.container</code> to a wrapping element.</p>
      <h3>Row</h3>
      <p>Unlike a Container, a Row <em>is</em> a required class. Columns whether percentage based of flexed must be placed inside of a wrapping row class. The row ensures that your columns are sized, scaled and styled properly. To define a row add <code>.row</code> to a div.</p>
      <h3>Columns</h3>
      <p>Columns are what contain your content. Columns by default have a 15px padding on the left and right creating a 30px gutter between them. This can be edited in the settings file if you prefer to make the gutter smaller. Most times though leaving column padding alone is just fine. Columns are defined by adding a base <code>.col</code> class to a div inside of a wrapping <code>.row</code>. Columns can then be define further by adding sizing classes. See <Link to="/flexed">the Flexed Grid</Link> or <Link to="/fixed">Fixed Grid</Link> for more details.</p>
		</div>

		<Highlight className="html" innerHTLM>
{
`<div class="container">
  <div class="row">
    <div class="col"></div>
    <div class="col"></div>
    <div class="col"></div>
  </div>
</div>`
}
		</Highlight>

	</div>
);

export default Grid;
