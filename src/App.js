import React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import './App.css';

import authProvider from './auth';
import i18nProvider from './i18n/provider';

import homeDashboard from './dashboards/home';

import { CustomersIcon, CustomersList, CustomersEdit, CustomersCreate } from './customers';
import { FieldsIcon,  FieldsList, FieldsEdit, FieldsCreate } from './fields';
import { PricesIcon, PricesList, PricesEdit, PricesCreate } from './prices';
import { SchedulesIcon, SchedulesList, SchedulesEdit, SchedulesCreate } from './schedules';
import { UserIcon, UsersList, UsersEdit, UsersCreate } from './users';

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
		<Resource name="customers" icon={CustomersIcon} list={CustomersList} edit={CustomersEdit} create={CustomersCreate} />
	</Admin>
);

export default App;
