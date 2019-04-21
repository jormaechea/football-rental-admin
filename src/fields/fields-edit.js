import React from 'react';
import { Edit, SimpleForm, TextInput, SelectInput } from 'react-admin';

import FieldsTitle from './fields-title';
import { optionsForSelect } from '../fields-sizes';

export const FieldsEdit = props => (
	<Edit title={<FieldsTitle />} {...props}>
		<SimpleForm>
			<TextInput source="name" />
			<SelectInput source="size" choices={optionsForSelect} />
		</SimpleForm>
	</Edit>
);