import React, { Component } from 'react';
import { Management } from './Management';

export class Home extends Component {
    static displayName = Home.name;

    render() {
        return (
            <div>
                <Management />
            </div>
        );
    }
}
export default Home;