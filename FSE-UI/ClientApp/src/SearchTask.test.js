import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import SearchTask from './components/task/SearchTask';
it('renders without crashing', async () => {
    const div = document.createElement('div');
    function getTaskItemForMod() {
        return '';
    }
    ReactDOM.render(
        <SearchTask onGetParam={getTaskItemForMod} />
        , div);
    await new Promise(resolve => setTimeout(resolve, 1000));
});