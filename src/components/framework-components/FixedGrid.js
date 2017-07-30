import React from 'react';
import Highlight from 'react-highlight';

import 'highlight.js/styles/github.css';

const FixedGrid = () => (
	<div className="grid">

		<div className="content">
			<h2>Fixed</h2>
			<p>You can set a fixed columns if you want a specific sizing. Just add <code>.col-[screen]-[size]</code> to the column div.</p>
			<p>One thing to keep in mind is that by default columns break to fullwidth on mobile. So if you'll typically need to add size specific classes to each div within the row.</p>
		</div>

		<div className="row">
			<p>Size 1 of 1</p>
			<div className="col col-sm-12">
				<div className="inner">.col-12</div>
			</div>
		</div>

		<p>Size 1 of 2</p>
		<div className="row">
			<div className="col col-sm-12 col-md-6">
				<div className="inner">.col-sm-12 .col-md-6</div>
			</div>
			<div className="col col-sm-12 col-md-6">
				<div className="inner">.col-sm-12 .col-md-6</div>
			</div>
		</div>

		<p>Mixed</p>
		<div className="row">
			<div className="col col-sm-6 col-md-4">
					<div className="inner">.col-sm-6 .col-md-4</div>
			</div>
			<div className="col col-sm-6 col-md-8">
					<div className="inner">.col-sm-6 .col-md-8</div>
			</div>
		</div>

		<p>Mixed with Auto</p>
		<div className="row sm-align-middle">
			<div className="col col-sm-12 col-md-2"><div className="inner">.sm-12 .md-2</div></div>
			<div className="col "><div className="inner">Auto Flex</div></div>
			<div className="col col-sm-12 col-md-2"><div className="inner">.sm-12 .md-2</div></div>
		</div>

		<Highlight className="html" innerHTLM>
{
`<div class="row">
  <div class="col sm-12 md-6">Column</div>
  <div class="col sm-12 md-6">Column</div>
</div>

<div class="row">
  <div class="col sm-12 md-2">Column</div>
  <div class="col">Auto Flex</div>
  <div class="col sm-12 md-2">Column</div>
</div>`
}
		</Highlight>

	</div>
);

export default FixedGrid;
