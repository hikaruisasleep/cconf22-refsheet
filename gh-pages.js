import { publish } from 'gh-pages';

publish(
	'build', // path to public directory
	{
		branch: 'live',
		repo: 'https://github.com/hikaruisasleep/cconf22-refsheet',
		user: {
			name: 'Ben Wu',
			email: 'benayaj.2004@gmail.com'
		},
		dotfiles: true
	},
	() => {
		console.log('Deploy Complete!');
	}
);