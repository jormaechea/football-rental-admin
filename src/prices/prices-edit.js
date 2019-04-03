import React from 'react';
import { Edit, SimpleForm, TextInput, NumberInput } from 'react-admin';

import PricesTitle from './prices-title';

export const PricesEdit = props => (
    <Edit title={<PricesTitle />} {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <NumberInput source="value" />
        </SimpleForm>
    </Edit>
);