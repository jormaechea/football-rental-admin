import React from 'react';
import { Create, SimpleForm, SelectInput } from 'react-admin';
import { TimeInput } from 'react-admin-date-inputs';

import { optionsForSelect } from '../days-of-week';

export const SchedulesCreate = props => (
	<Create {...props}>
		<SimpleForm>
			<SelectInput source="dayOfWeek" choices={optionsForSelect} />
			<TimeInput source="startingHour" options={{ autoOk: true }} />
			<TimeInput source="endingHour" options={{ autoOk: true }} />
		</SimpleForm>
	</Create>
);