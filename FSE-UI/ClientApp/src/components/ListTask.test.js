import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import ListTask from './components/task/ListTask';
it('renders without crashing', async () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <ListTask />
        , div);
    await new Promise(resolve => setTimeout(resolve, 1000));
});