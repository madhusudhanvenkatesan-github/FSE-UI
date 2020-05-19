import React, { Component, Fragment } from 'react';
import { Home } from './components/Home';
import './custom.css'
import AppHeader from './components/AppHeader';

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <Fragment>
                <AppHeader />
                <Home />
            </Fragment>
        );
    }
}
