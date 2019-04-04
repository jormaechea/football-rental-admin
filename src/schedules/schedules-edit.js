import React from 'react';
import { Edit, SimpleForm, TextInput, SelectInput } from 'react-admin';
// import { TimeInput } from 'react-admin-date-inputs';

import { optionsForSelect } from '../days-of-week';

console.log(optionsForSelect);

export const SchedulesEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <SelectInput source="dayOfWeek" choices={optionsForSelect} />
            {/*<TimeInput source="startingHour" options={{ format: 'HH:mm' }} />
            <TimeInput source="endingHour" options={{ format: 'HH:mm' }} />*/}
            <TextInput source="startingHour" />
            <TextInput source="endingHour" />
      </SimpleForm>
    </Edit>
);