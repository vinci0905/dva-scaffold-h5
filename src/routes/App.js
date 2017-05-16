import React, { PropTypes } from 'react';
import { connect } from 'dva';
import Header from '../components/Layout/Header';


function App({children, location, dispatch, app}) {
	const headerProps = {
		
	};

	return (
        <div>
            <Header {...headerProps} />
            {children}
        </div>
	);
}

App.propTypes = {
	children: PropTypes.element.isRequired,
	location: PropTypes.object,
	dispatch: PropTypes.func
};

export default connect(({app}) => ({app}))(App);
