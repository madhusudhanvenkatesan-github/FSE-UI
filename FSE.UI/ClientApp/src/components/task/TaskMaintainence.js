import React, { Component, Fragment } from 'react';
import ListTask from './ListTask';
import ModifyTask from './ModfiyTask';


export class TaskMaintainence extends Component {
    static displayName = TaskMaintainence.name;
    state = {
        showMode: false,
        item: null
    }
    toggle = (tskitem) => {
        this.setState({ item: tskitem });
        this.setState(previous => ({
            showMode: !previous.showMode
        }));
        //this.setState({ item: tskitem });

    }
    getTaskItemForMod = () => {
        return this.state.item;
    }
    render() {

        return <div>
            {this.state.showMode ? <ModifyTask onToggle={this.toggle} onGetParam={this.getTaskItemForMod} /> : <ListTask onToggle={this.toggle} />}

        </div>
    }
}
export default TaskMaintainence;