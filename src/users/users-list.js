import React from 'react';
import { List, Datagrid, TextField, EmailField, BooleanField, DateField } from 'react-admin';

import UsersFilter from './users-filter';

export const UsersList = props => (
	<List {...props} filters={<UsersFilter />}>
		<Datagrid rowClick="edit">
			<EmailField source="email" />
			<TextField source="firstName" sortable={false} />
			<TextField source="lastName" sortable={false} />
			<BooleanField source="isActive" sortable={false} />
			<BooleanField source="emailVerified" sortable={false} />
			<DateField source="lastLogin" showTime />
		</Datagrid>
	</List>
);
