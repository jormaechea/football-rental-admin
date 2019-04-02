import React from 'react';
import { Create, SimpleForm, TextInput, SelectInput } from 'react-admin';

import { optionsForSelect } from '../fields-sizes';

export const FieldsCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <SelectInput source="size" choices={optionsForSelect} />
        </SimpleForm>
    </Create>
);