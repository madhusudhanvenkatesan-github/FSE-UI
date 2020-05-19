import React, { Component, Fragment } from 'react';
import { Modal, ModalHeader, ModalBody, Button } from 'reactstrap';
import SearchTask from './SearchTask';

export class SearchModal extends Component {
    static displayName = SearchModal.name;
    state = {
        modal: false
    }
    toggle = () => {

        this.setState(previous => ({
            modal: !previous.modal
        }));

    }
    render() {
        return <Fragment>
            <Button
                color="info"
                onClick={this.toggle}
                style={{ minWidth: "100px" }} >Search Task</Button>
            <Modal isOpen={this.state.modal} toggle={this.toggle} style={{ minWidth: '500px' }}>
                <ModalHeader toggle={this.toggle}>Task Search</ModalHeader>
                <ModalBody>
                    <SearchTask onSelect={this.props.onSelect} onToggle={this.toggle}
                        onGetParam={this.props.onGetParam}>
                    </SearchTask>
                </ModalBody>
            </Modal>
        </Fragment>


    }
}
export default SearchModal;