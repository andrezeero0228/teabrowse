import React from 'react';

import styles from '../styles/main';

const { BrowserWindow } = window.require('electron').remote;

const Maximize = (props) => (
	<svg alt="Maximize" className="svgIcon" viewBox="0 0 20 20" onClick={toggle}>
		<path
			style={styles.svgIcon}
			d="M10,0.562c-5.195,0-9.406,4.211-9.406,9.406c0,5.195,4.211,9.406,9.406,9.406c5.195,0,9.406-4.211,9.406-9.406C19.406,4.774,15.195,0.562,10,0.562 M10,18.521c-4.723,0-8.551-3.829-8.551-8.552S5.277,1.418,10,1.418s8.552,3.828,8.552,8.551S14.723,18.521,10,18.521"
		></path>
	</svg>
);

export default Maximize;
