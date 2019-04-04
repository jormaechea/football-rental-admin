import React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import './App.css';


import authProvider from './auth';
import i18nProvider from './i18n/provider';

import homeDashboard from './dashboards/home';

import UserIcon from '@material-ui/icons/People';
import { UsersList } from './users/users-list';
import { UsersEdit } from './users/users-edit';
import { UsersCreate } from './users/users-create';

import FieldsIcon from '@material-ui/icons/Crop169';
import { FieldsList } from './fields/fields-list';
import { FieldsEdit } from './fields/fields-edit';
import { FieldsCreate } from './fields/fields-create';

import PricesIcon from '@material-ui/icons/MonetizationOn';
import { PricesList } from './prices/prices-list';
import { PricesEdit } from './prices/prices-edit';
import { PricesCreate } from './prices/prices-create';

import SchedulesIcon from '@material-ui/icons/Schedule';
import { SchedulesList } from './schedules/schedules-list';
import { SchedulesEdit } from './schedules/schedules-edit';
import { SchedulesCreate } from './schedules/schedules-create';

// const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');
const dataProvider = jsonServerProvider('http://localhost:4000/api');

const App = () => (
	<Admin
		authProvider={authProvider}
		i18nProvider={i18nProvider}
		dataProvider={dataProvider}
		dashboard={homeDashboard}
	>
		<Resource name="users" icon={UserIcon} list={UsersList} edit={UsersEdit} create={UsersCreate} />
		<Resource name="fields" icon={FieldsIcon} list={FieldsList} edit={FieldsEdit} create={FieldsCreate} />
		<Resource name="prices" icon={PricesIcon} list={PricesList} edit={PricesEdit} create={PricesCreate} />
		<Resource name="schedules" icon={SchedulesIcon} list={SchedulesList} edit={SchedulesEdit} create={SchedulesCreate} />
	</Admin>
);

export default App;
