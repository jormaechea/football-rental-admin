import React from 'react';
import { Edit, SimpleForm, TextInput, BooleanInput, DateInput } from 'react-admin';

import UsersTitle from './users-title';

export const UsersEdit = props => (
    <Edit title={<UsersTitle />} {...props}>
        <SimpleForm>
            <TextInput source="firstName" />
            <TextInput source="lastName" />
            <BooleanInput source="isActive" />
            <BooleanInput source="emailVerified" />
            <DateInput source="lastLogin" />
        </SimpleForm>
    </Edit>
);