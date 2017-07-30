import React from 'react';
import Highlight from 'react-highlight';

import 'highlight.js/styles/github.css';

const PushedGrid = () => (
	<div className="grid">

		<div className="content">
			<h2>Offsets</h2>
			<p>You can offset either auto flexed columns or percentage based columns.</p>
			<p>You must specify a screen [size] in order to push. <code>.[screen]-push-[size]</code></p>
		</div>

		<div className="row">
			<div className="col sm-push-6"><div className="inner">Flexed Push Col</div></div>
			<div className="col col-sm-2 sm-push-10">
				<div className="inner">Pushed 10</div>
			</div>
			<div className="col col-sm-3 sm-push-9">
				<div className="inner">Pushed 9</div>
			</div>
			<div className="col col-sm-4 sm-push-8">
				<div className="inner">Pushed 8</div>
			</div>
			<div className="col col-sm-5 sm-push-7">
				<div className="inner">Pushed 7</div>
			</div>
			<div className="col col-sm-6 sm-push-6">
				<div className="inner">Pushed 6</div>
			</div>
			<div className="col col-sm-7 sm-push-5">
				<div className="inner">Pushed 5</div>
			</div>
			<div className="col col-sm-8 sm-push-4">
				<div className="inner">Pushed 4</div>
			</div>
			<div className="col col-sm-9 sm-push-3">
				<div className="inner">Pushed 3</div>
			</div>
			<div className="col col-sm-10 sm-push-2">
				<div className="inner">Pushed 2</div>
			</div>
		</div>

		<Highlight className="html" innerHTLM>
{
`<div class="row">
  <div class="col sm-push-6">Offset by 6 cols</div>
  <div class="col sm-6 sm-push-6">6 cols pushed 6</div>
</div>`
}
		</Highlight>

	</div>
);

export default PushedGrid;
