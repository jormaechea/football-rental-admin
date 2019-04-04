import React from 'react';
import { Filter, TextInput } from 'react-admin';

export default props => (
	<Filter {...props}>
		<TextInput source="firstName" alwaysOn />
		<TextInput source="lastName" alwaysOn />
		<TextInput source="phone" alwaysOn />
		<TextInput source="email" />
		<TextInput source="documentNumber" />
	</Filter>
);
