import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import { Title } from 'react-admin';

export default () => (
	<Card>
		<Title title="Football rental" />
		<CardHeader title="Home" />
		<CardContent>Some home stuff</CardContent>
	</Card>
);