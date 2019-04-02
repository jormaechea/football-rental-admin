import React from 'react';
import { Filter, TextInput, SelectInput } from 'react-admin';

import { optionsForSelect } from '../fields-sizes';

export default props => (
	<Filter {...props}>
		<TextInput source="name" alwaysOn />
		<SelectInput source="size" alwaysOn choices={optionsForSelect} />
	</Filter>
);
