import React from 'react';
import ReactDOM from 'react-dom';
import MaintainenceTask from './components/Task/MaintainenceTask';
it('renders without crashing', async () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <MaintainenceTask />
        , div);
    await new Promise(resolve => setTimeout(resolve, 1000));
});