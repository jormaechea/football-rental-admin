import React from 'react';
import { Create, SimpleForm, TextInput, NumberInput } from 'react-admin';

export const PricesCreate = props => (
	<Create {...props}>
		<SimpleForm>
			<TextInput source="name" />
			<NumberInput source="value" />
		</SimpleForm>
	</Create>
);