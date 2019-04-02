import React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import './App.css';

import UserIcon from '@material-ui/icons/People';

import authProvider from './auth';
import i18nProvider from './i18n/provider';

import homeDashboard from './dashboards/home';

import { UsersList } from './users/users-list';
import { UserEdit } from './users/users-edit';
import { UserCreate } from './users/users-create';

// const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');
const dataProvider = jsonServerProvider('http://localhost:4000/api');

const App = () => (
	<Admin
		authProvider={authProvider}
		i18nProvider={i18nProvider}
		dataProvider={dataProvider}
		dashboard={homeDashboard}
	>
		<Resource name="users" icon={UserIcon} list={UsersList} edit={UserEdit} create={UserCreate} />
	</Admin>
);

export default App;
