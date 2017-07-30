import React from 'react';
import Highlight from 'react-highlight';

import 'highlight.js/styles/github.css';

const Settings = () => (
	<div className="grid">

		<div className="content">
			<h2>Framework Settings</h2>
			<p>The framework contains a settings file to set you base styles for various items. This is helpful when trying to define global settings at the start of a new project.</p>
			<p>The file contains settings for the following...
				<ul>
					<li>Breakpoints</li>
					<li>Font Styling</li>
					<li>Colors</li>
				</ul>
			</p>
		</div>

		<Highlight className="scss" innerHTLM>
{
`// Breakpoints
$breakpoint-sm: 39.9375em;
$breakpoint-md: 40em;
$breakpoint-lg: 64em;

/* Grid Settings
========================================================================== */
$max-container-width: 62.5rem;
$col-padding: .9375rem;
$row-margin-bottom: 0;
$row-margin-top: 0;

/*  Font Settings
========================================================================== */
$global-font-size: 16px;
$global-line-height: 1.5;
$global-font-family: "Helvetica", "Arial", sans-serif;

/*  Colors
========================================================================== */
$colors: (
  base: (
    "primary": #000000,
    "secondary": #0399A3;,
  ),
  links: (
    "primary": #ea5341,
    "hover": #c73f2f,
  ),
  background: (
    "dark": #333333,
    "light": #eeeeee,
  )
);`
}
		</Highlight>

		<div className="content">
			<h2>Colors</h2>
			<p>The colors that are define in <code>_settings.scss</code> can be called in your code in two ways.</p>
			<p>First by adding a direct class. You can change the color of your element by applying <code>.--color-[section]-[name]</code> to change the background of your element add a class of <code>.--bg-[section]-[name]</code>. An example of using this in practice may look like <br/><code>.--color-base-primary</code> or <code>.--bg-background-dark</code></p>
			<p>Secondly you can define the color in your css file by calling the colors map like below.</p>
			<p><code>color: color(base, primary)</code> or <code>background-color: color(background, dark)</code></p>
		</div>

		<div className="content">
			<h3>Example of using colors in CSS</h3>
			<Highlight className="scss">
{`.some-elemenet {
  color: color(base, primary);
  background-color: color(background, light);
}
`}
			</Highlight>
		</div>

		<div className="content">
			<h3>Example of using color classes in HTML</h3>
			<Highlight className="html">
{`<div class="row">
  <div class="col --color-base-primary">Column Content</div>
</div>
<div class="row --bg-background-dark">
  <div class="col">Column Content</div>
</div>
`}
			</Highlight>
		</div>

	</div>
);

export default Settings;
