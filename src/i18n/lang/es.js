import englishMessages from 'ra-language-spanish';

export const messages = {
	simple: {
		action: {
			resetViews: 'Reset views',
		},
	},
	...englishMessages,
	resources: {
		users: {
			name: 'Usuario |||| Usuarios',
			fields: {
				name: 'Nombre',
				role: 'Rol',
			},
		},
	},
	user: {
		list: {
			search: 'Buscar',
		},
		form: {
			summary: 'Resumen',
			security: 'Securidad',
		},
		edit: {
			title: 'Usuario "%{title}"',
		},
		action: {
			save_and_add: 'Guardar y crear nuevo',
			save_and_show: 'Guardar y mostrar',
		},
	},
};

export default messages;