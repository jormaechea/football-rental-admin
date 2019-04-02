import englishMessages from 'ra-language-english';

export const messages = {
	simple: {
		action: {
			resetViews: 'Reset views',
		},
	},
	...englishMessages,
	resources: {
		users: {
			name: 'User |||| Users',
			fields: {
				name: 'Name',
				role: 'Role',
			},
		},
	},
	user: {
		list: {
			search: 'Search',
		},
		form: {
			summary: 'Summary',
			security: 'Security',
		},
		edit: {
			title: 'User "%{title}"',
		},
		action: {
			save_and_add: 'Save and Add',
			save_and_show: 'Save and Show',
		},
	},
};

export default messages;