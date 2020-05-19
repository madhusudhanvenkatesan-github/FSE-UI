import React, { Component } from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import UserHome from './user/HomeUser';
import ProjectHome from './project/Home';
import TaskAdd from './task/AddTask';
import TaskMaintainence from './task/MaintainenceTask';

export class Home extends Component {
    static displayName = Home.name;

    render() {
        return (
            <div>
                <Tabs defaultActiveKey="User" id="uncontrolled-tab-example">

                    <Tab eventKey="Project" title="Project">
                        <Home />
                    </Tab>
                    <Tab eventKey="AddTask" title="Task Add">
                        <AddTask />
                    </Tab>
                    <Tab eventKey="MaintainenceTask" title="Task Maintainence">
                        <MaintainenceTask />
                    </Tab>
                </Tabs>
            </div>
        );
    }
}
