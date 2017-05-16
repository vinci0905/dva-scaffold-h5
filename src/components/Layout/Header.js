import React from 'react';
import { NavBar, Icon } from 'antd-mobile';



function Header () {
	
	return (
		<NavBar leftContent="返回" mode="light" onLeftClick={() => console.log('onLeftClick')}
	      rightContent={[
	        <Icon key="0" type="search" style={{ marginRight: '0.32rem' }} />,
	        <Icon key="1" type="ellipsis" />,
	      ]}
	    >NavBar</NavBar>
	);
}

export default Header;


