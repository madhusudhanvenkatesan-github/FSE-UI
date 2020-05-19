import React, { Component, Fragment } from 'react';
import ListTask from './ListTask';
import TaskModal from './TaskModal';

export class MaintainenceTask extends Component {
    static displayName = MaintainenceTask.name;
    state = {
        showMode: false,
        item: null
    }
    toggle = (tskitem) => {
        this.setState({ item: tskitem });
        this.setState(previous => ({
            showMode: !previous.showMode
        }));
    }
    getTaskItemForMod = () => {
        return this.state.item;
    }
    render() {

        return <div>
            {this.state.showMode ? <TaskModal onToggle={this.toggle} onGetParam={this.getTaskItemForMod} /> : <ListTask onToggle={this.toggle} />}

        </div>
    }
}
export default MaintainenceTask;