import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import TaskModal from './components/task/TaskModal';
it('renders without crashing', async () => {
    const div = document.createElement('div');
    function getTaskItemForMod() {
        return null;
    }
    ReactDOM.render(
        <TaskModal onGetParam={getTaskItemForMod} />
        , div);
    await new Promise(resolve => setTimeout(resolve, 1000));
});