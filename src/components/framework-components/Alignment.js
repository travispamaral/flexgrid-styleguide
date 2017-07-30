import React from 'react';
import Highlight from 'react-highlight';

import 'highlight.js/styles/github.css';

const Alignment = () => (
	<div className="grid">

		<div className="content">
			<h2>Alignment</h2>
			<h3>Self Aligning</h3>
			<p>You can align individual columns within a row by adding <code>.[screen]-align-self-[alignment]</code>.<br/>
			[top] will align to the top of the row, [middle] will vertically center the column, [bottom] will align the column the very bottom of the row. Lastly [stretch] will stretch the column to an equal height of the tallest column in the row.</p>
		</div>

		<div className="row">
			<div className="col sm-align-self-bottom">
				<div className="inner">Align Self Bottom</div>
			</div>
			<div className="col sm-align-self-middle">
				<div className="inner">Align Self Middle</div>
			</div>
			<div className="col sm-align-self-top">
				<div className="inner">Align Self Top</div>
			</div>
			<div className="col sm-align-self-stretch non-inner">
				Align Self Stretch
			</div>
			<div className="col non-inner">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci earum, vitae iste obcaecati id explicabo placeat vel, optio quae qui illo dolorum similique voluptate debitis voluptatibus nam provident dolore fugiat.
			</div>
		</div>

		<Highlight className="html" innerHTLM>
{
`<div class="row">
  <div class="col sm-align-self-bottom">Align Self Bottom</div>
  <div class="col sm-align-self-middle">Align Self Middle</div>
  <div class="col sm-align-self-top">Align Self Top</div>
  <div class="col sm-align-self-stretch">Align Self Stretch</div>
  <div class="col">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci earum, vitae iste obcaecati id explicabo placeat vel, optio quae qui illo dolorum similique voluptate debitis voluptatibus nam provident dolore fugiat.
  </div>
</div>`
}
		</Highlight>

		<div className="content">
			<h3>Row Aligning</h3>
			<p>you can align all of the columns within a single row by adding <code>.[screen]-align-[alignment]</code>.<br/>
			[top] will align everything to the top of row, [middle] will vertically center the columns, [bottom] will align all columns to the very bottom of the row. Lastly [stretch] will stretch all columns to the height of the tallest column.</p>
		</div>

		<h3>Aligned Middle</h3>
		<div className="row sm-align-middle">
			<div className="col">
				<div className="inner">Aligned Middle</div>
			</div>
			<div className="col">
				<div className="inner">Align Middle</div>
			</div>
			<div className="col non-inner">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci earum, vitae iste obcaecati id explicabo placeat vel, optio quae qui illo dolorum similique voluptate debitis voluptatibus nam provident dolore fugiat.
			</div>
		</div>

		<Highlight className="html" innerHTLM>
{
`<div class="row sm-align-middle">
  <div class="col">Aligned Middle</div>
  <div class="col">Aligned Middle</div>
  <div class="col">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci earum, vitae iste obcaecati id explicabo placeat vel, optio quae qui illo dolorum similique voluptate debitis voluptatibus nam provident dolore fugiat.
  </div>
</div>`
}
		</Highlight>

		<h3>Aligned Bottom</h3>
		<div className="row sm-align-bottom">
			<div className="col">
				<div className="inner">Aligned Bottom</div>
			</div>
			<div className="col">
				<div className="inner">Align Bottom</div>
			</div>
			<div className="col non-inner">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci earum, vitae iste obcaecati id explicabo placeat vel, optio quae qui illo dolorum similique voluptate debitis voluptatibus nam provident dolore fugiat.
			</div>
		</div>

		<Highlight className="html" innerHTLM>
{
`<div class="row sm-align-bottom">
  <div class="col">Aligned Bottom</div>
  <div class="col">Aligned Bottom</div>
  <div class="col">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci earum, vitae iste obcaecati id explicabo placeat vel, optio quae qui illo dolorum similique voluptate debitis voluptatibus nam provident dolore fugiat.
  </div>
</div>`
}
		</Highlight>

		<h3>Stretched</h3>
		<div className="row sm-align-stretch">
			<div className="col non-inner">
				Aligned Stretch
			</div>
			<div className="col non-inner">
				Align Stretch
			</div>
			<div className="col non-inner">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci earum, vitae iste obcaecati id explicabo placeat vel, optio quae qui illo dolorum similique voluptate debitis voluptatibus nam provident dolore fugiat.
			</div>
		</div>

		<Highlight className="html" innerHTLM>
{
`<div class="row sm-align-stretch">
  <div class="col">Aligned Stretch</div>
  <div class="col">Aligned Stretch</div>
  <div class="col">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci earum, vitae iste obcaecati id explicabo placeat vel, optio quae qui illo dolorum similique voluptate debitis voluptatibus nam provident dolore fugiat.
  </div>
</div>`
}
		</Highlight>

	</div>
);

export default Alignment;
