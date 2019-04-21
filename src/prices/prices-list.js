import React from 'react';
import { List, Datagrid, TextField , NumberField } from 'react-admin';

export const PricesList = props => (
	<List {...props}>
		<Datagrid rowClick="edit">
			<TextField source="name" />
			<NumberField source="value" options={{ maximumFractionDigits: 2, style: 'currency', currency: 'ARS' }} />
		</Datagrid>
	</List>
);
