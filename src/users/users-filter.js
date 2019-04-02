import React from 'react';
import { Filter, TextInput, BooleanInput } from 'react-admin';

export default props => (
	<Filter {...props}>
		<TextInput source="email" alwaysOn />
		<BooleanInput source="isActive" />
	</Filter>
);
