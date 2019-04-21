import React from 'react';
import { List, Datagrid, DateField, SelectField } from 'react-admin';

import SchedulesFilter from './schedules-filter';
import { optionsForSelect } from '../days-of-week';

export const SchedulesList = props => (
	<List {...props} filters={<SchedulesFilter />}>
		<Datagrid rowClick="edit">
			<SelectField source="dayOfWeek" choices={optionsForSelect} />
			<DateField source="startingHour" showTime options={{ hour: '2-digit', minute: '2-digit' }}/>
			<DateField source="endingHour" showTime options={{ hour: '2-digit', minute: '2-digit' }}/>
		</Datagrid>
	</List>
);
