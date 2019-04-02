import React from 'react';
import { Filter, TextInput, BooleanInput } from 'react-admin';

export default props => (
	<Filter {...props}>
		<TextInput label="Email" source="email" alwaysOn />
		<BooleanInput label="Active users" source="isActive" />
	</Filter>
);
