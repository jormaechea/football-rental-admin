import React from 'react';
import { Edit, SimpleForm, SelectInput, translate } from 'react-admin';
import { TimeInput } from 'react-admin-date-inputs';

import { optionsForSelect } from '../days-of-week';

export const SchedulesEdit = translate(props => (
	<Edit {...props}>
		<SimpleForm>
			<SelectInput source="dayOfWeek" choices={optionsForSelect} />
			<TimeInput source="startingHour" label={props.translate('resources.schedules.fields.startingHour', { _: 'Starting hour'})} options={{ autoOk: true }} />
			<TimeInput source="endingHour" label={props.translate('resources.schedules.fields.endingHour', { _: 'Ending hour'})} options={{ autoOk: true }} />
	  </SimpleForm>
	</Edit>
));
