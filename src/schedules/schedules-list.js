import React from 'react';
import { List, Datagrid, TextField, SelectField } from 'react-admin';

import SchedulesFilter from './schedules-filter';
import { optionsForSelect } from '../days-of-week';

export const SchedulesList = props => (
	<List {...props} filters={<SchedulesFilter />}>
		<Datagrid rowClick="edit">
			<SelectField source="dayOfWeek" choices={optionsForSelect} />
			<TextField source="startingHour" />
			<TextField source="endingHour" />
		</Datagrid>
	</List>
);
