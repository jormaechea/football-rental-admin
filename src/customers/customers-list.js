import React from 'react';
import { List, Datagrid, ReferenceField, TextField, EmailField, BooleanField } from 'react-admin';

import CustomersFilter from './customers-filter';

export const CustomersList = props => (
	<List {...props} filters={<CustomersFilter />}>
		<Datagrid rowClick="edit">
			<ReferenceField source="ownerId" reference="users">
				<TextField source="fullName" />
			</ReferenceField>
			<TextField source="firstName" sortable={false} />
			<TextField source="lastName" sortable={false} />
			<TextField source="documentNumber" sortable={false} />
			<TextField source="phone" sortable={false} />
			<EmailField source="email" sortable={false} />
			<BooleanField source="isBlacklisted" sortable={false} />
			<BooleanField source="isPremium" sortable={false} />
		</Datagrid>
	</List>
);
