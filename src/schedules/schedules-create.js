import React from 'react';
import { Create, SimpleForm, TextInput, SelectInput } from 'react-admin';
// import { TimeInput } from 'react-admin-date-inputs';

import { optionsForSelect } from '../days-of-week';

export const SchedulesCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <SelectInput source="dayOfWeek" choices={optionsForSelect} />
            {/*<TimeInput source="startingHour" options={{ format: 'HH:mm' }} />
            <TimeInput source="endingHour" options={{ format: 'HH:mm' }} />*/}
            <TextInput source="startingHour" />
            <TextInput source="endingHour" />
        </SimpleForm>
    </Create>
);