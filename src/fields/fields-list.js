import React from 'react';
import { List, Datagrid, TextField, SelectField } from 'react-admin';

import FieldsFilter from './fields-filter';
import { optionsForSelect } from '../fields-sizes';

console.log(optionsForSelect);

export const FieldsList = props => (
	<List {...props} filters={<FieldsFilter />}>
		<Datagrid rowClick="edit">
			<TextField source="name" />
			<SelectField source="size" choices={optionsForSelect} />
		</Datagrid>
	</List>
);
