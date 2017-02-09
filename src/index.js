import React from 'react';
import ReactDOM from 'react-dom';
import AppReviews from './js/AppReviews';

const reviews = [];

ReactDOM.render(
	<AppReviews reviews={ reviews } />,
	document.getElementById('root')
);