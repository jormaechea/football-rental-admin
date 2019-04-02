import React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import './App.css';

import UserIcon from '@material-ui/icons/People';
import FieldsIcon from '@material-ui/icons/Crop169';

import authProvider from './auth';
import i18nProvider from './i18n/provider';

import homeDashboard from './dashboards/home';

import { UsersList } from './users/users-list';
import { UserEdit } from './users/users-edit';
import { UserCreate } from './users/users-create';

import { FieldsList } from './fields/fields-list';
import { FieldsEdit } from './fields/fields-edit';
import { FieldsCreate } from './fields/fields-create';

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
		<Resource name="fields" icon={FieldsIcon} list={FieldsList} edit={FieldsEdit} create={FieldsCreate} />
	</Admin>
);

export default App;
