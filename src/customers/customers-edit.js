import React from 'react';
import { Edit, SimpleForm, ReferenceInput, AutocompleteInput, TextInput, BooleanInput } from 'react-admin';

import CustomersTitle from './customers-title';

export const CustomersEdit = props => (
	<Edit title={<CustomersTitle />} {...props}>
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
	</Edit>
);