import React from 'react';
import ReactDOM from 'react-dom';
import AddTask from './components/Task/AddTask';
it('renders without crashing', async () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <AddTask />
        , div);
    await new Promise(resolve => setTimeout(resolve, 1000));
});