import React from 'react';
import { connect } from 'react-redux';

import Tab from './Tab';
import TabCloseAnimation from './TabCloseAnimation';

import { addTab, removeTab } from '../redux/actions';
import styles from './styles/tab';

const TabList = (props) => {
	const closeTab = (id, element) => {
		new TabCloseAnimation(element);
		props.dispatch(removeTab(id));
	};

	return (
		<div style={styles.tabList}>
			{props.tabs.map((tab) => (
				<Tab
					key={tab.id}
					closeTab={closeTab}
					tab={tab}
					listener={props.webviewEmmiter}
				/>
			))}

			<button
				style={{ border: 'none', backgroundColor: 'inherit' }}
				onClick={() => {
					props.dispatch(addTab());
				}}
			>
				+
			</button>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		tabs: state.tabs
	};
};

export default connect(mapStateToProps)(TabList);
