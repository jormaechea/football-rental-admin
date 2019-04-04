import React from 'react';
import { Filter, SelectInput } from 'react-admin';

import { optionsForSelect } from '../days-of-week';

export default props => (
	<Filter {...props}>
		<SelectInput source="dayOfWeek" alwaysOn choices={optionsForSelect} />
	</Filter>
);
