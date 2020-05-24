import React, { Component } from 'react';
import {
    Navbar,
    NavbarBrand,
} from 'reactstrap';
class AppHeader extends Component {
    render() {
        return <Navbar color="dark" dark expand="md">
            <NavbarBrand href="/">
                <p style={{ color: "white" }}> Project Management</p>
            </NavbarBrand>
        </Navbar>;
    }
}
export default AppHeader; 