import React from 'react';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import Theme from '../components/Theme';

// Straight away require/import scss/css just like in react.
import indexStyle from '../styles/index.scss';

const Index = () => (
    <Theme>
        <p>Welcome</p>
    </Theme>
);

export default Index;
