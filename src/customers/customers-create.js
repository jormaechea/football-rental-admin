import React from 'react';
import { Create, SimpleForm, ReferenceInput, AutocompleteInput, TextInput, BooleanInput } from 'react-admin';

export const CustomersCreate = props => (
	<Create {...props}>
		<SimpleForm>
			<ReferenceInput source="ownerId" reference="users" filterToQuery={searchText => ({ q: searchText })}>
				<AutocompleteInput optionText="fullName" />
			</ReferenceInput>
			<TextInput source="firstName" />
			<TextInput source="lastName" />
			<TextInput source="documentNumber" />
			<TextInput source="phone" />
			<TextInput source="email" type="email" />
			<BooleanInput source="isBlacklisted" />
			<BooleanInput source="isPremium" />
		</SimpleForm>
	</Create>
);