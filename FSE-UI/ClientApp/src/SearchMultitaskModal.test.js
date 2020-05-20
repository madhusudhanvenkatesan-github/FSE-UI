import React from 'react';
import ReactDOM from 'react-dom';
import SearchMultitaskModal from './components/Task/SearchMultitaskModal';
it('renders without crashing', async () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <SearchMultitaskModal />
        , div);
    await new Promise(resolve => setTimeout(resolve, 1000));
});