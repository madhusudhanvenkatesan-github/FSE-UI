import React, { Component } from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import UserHome from './user/userHome';
import ProjectHome from './project/ProjectHome';
import AddTask from './task/AddTask';
import TaskMaintainence from './task/TaskMaintainence';

export class Home extends Component {
    static displayName = Home.name;

  render () {
    return (
      <div>
            <Tabs defaultActiveKey="User" id="uncontrolled-tab-example">
                <Tab eventKey="User" title="User">
                    <UserHome />
                </Tab>
                <Tab eventKey="Project" title="Project">
                    <ProjectHome />
                </Tab>
                <Tab eventKey="AddTask" title="Task Add">
                    <AddTask />
                </Tab>
                <Tab eventKey="TaskMaintainence" title="Task Maintainence">
                    <TaskMaintainence />
                </Tab>
            </Tabs>
      </div>
    );
  }
}
