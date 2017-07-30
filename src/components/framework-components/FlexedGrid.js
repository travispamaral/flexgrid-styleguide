import React from 'react';
import { Link } from 'react-router-dom';
import Highlight from 'react-highlight';

import 'highlight.js/styles/github.css';

const FlexedGrid = () => (
	<div className="grid">
		<div className="content">
			<h2>Flexed Grid</h2>
			<p>The grid by default will flex to fit any column within it evenly. On mobile columns will automatically break to fullwidth.<br />
			Because the grid is fully flexed you can add <Link to='/alignment'>alignment classes</Link> to stretch, align or vertically align columns.</p>
			<p>For more specific column layouts you can use a <Link to='/fixed'>fixed column classes</Link>. this will assign widths by percentages.</p>
		</div>

		<div className="row">
			<div className="col">
				<div className="inner">col</div>
			</div>
		</div>
		<div className="row">
			<div className="col">
				<div className="inner">Col</div>
			</div>
			<div className="col">
				<div className="inner">Col</div>
			</div>
		</div>
		<div className="row">
			<div className="col">
				<div className="inner">Col</div>
			</div>
			<div className="col">
				<div className="inner">Col</div>
			</div>
			<div className="col">
				<div className="inner">Col</div>
			</div>
		</div>
		<div className="row">
			<div className="col">
				<div className="inner">Col</div>
			</div>
			<div className="col">
				<div className="inner">Col</div>
			</div>
			<div className="col">
				<div className="inner">Col</div>
			</div>
			<div className="col">
				<div className="inner">Col</div>
			</div>
		</div>
		<div className="row">
			<div className="col">
				<div className="inner">Col</div>
			</div>
			<div className="col">
				<div className="inner">Col</div>
			</div>
			<div className="col">
				<div className="inner">Col</div>
			</div>
			<div className="col">
				<div className="inner">Col</div>
			</div>
			<div className="col">
				<div className="inner">Col</div>
			</div>
		</div>
		<div className="row">
			<div className="col">
				<div className="inner">Col</div>
			</div>
			<div className="col">
				<div className="inner">Col</div>
			</div>
			<div className="col">
				<div className="inner">Col</div>
			</div>
			<div className="col">
				<div className="inner">Col</div>
			</div>
			<div className="col">
				<div className="inner">Col</div>
			</div>
			<div className="col">
				<div className="inner">Col</div>
			</div>
		</div>

		<Highlight className="html" innerHTLM>
{
`<div class="row">
  <div class="col">COL</div>
  <div class="col">COL</div>
</div>`
}
		</Highlight>

	</div>
);

export default FlexedGrid;
