import React from 'react';
import ReactDOM from 'react-dom';
import AppReviews from './js/AppReviews';

// this is fake data, normally this data come from the server using and ajax request.
const reviews = [
	{
		name: 'John Doe',
		comment: 'Lorem ipsum ad his scripta blandit partiendo, eum fastidii accumsan euripidis in, eum liber hendrerit an. Qui ut wisi vocibus suscipiantur, quo dicit ridens inciderint id.'
	},
	{
		name: 'Reinier Guerra',
		comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
		photo: '/img/reinier.jpg'
	},
	{
		name: 'Jose Leandro Torres Sicilia',
		comment: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
		photo: '/img/leo.jpg'
	}
];

ReactDOM.render(
	<AppReviews reviews={ reviews } />,
	document.getElementById('root')
);