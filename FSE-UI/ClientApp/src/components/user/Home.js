import React, { Component } from 'react';
import Tabs from 'react-bootstrap/Tabs';
import UserManagement from './Managements';
export class Home extends Component {
    static displayName = Home.name;

    render() {
        return (
            <div>
                <UserManagement />

            </div>
        );
    }

}
export default Home;
