import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/app';
import About from './components/about';
import Contact from './components/contact';
import Home from './components/home';
import ContactInfo from './components/contact_info';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="about" component={About} />
        <Route path="contact" component={Contact}>
            <Route path="contact-info" component={ContactInfo}/>
        </Route>

    </Route>
);
