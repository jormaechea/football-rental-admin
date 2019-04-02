import React from 'react';
import { Create, SimpleForm, TextInput, BooleanInput } from 'react-admin';

export const UserCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="email" />
            <TextInput source="firstName" />
            <TextInput source="lastName" />
            <BooleanInput source="isActive" />
            <BooleanInput source="emailVerified" />
        </SimpleForm>
    </Create>
);