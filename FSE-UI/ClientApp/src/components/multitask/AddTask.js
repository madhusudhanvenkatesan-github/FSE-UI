import React, { Component, Fragment } from 'react';
import { Button, Form, FormGroup, Input, Label, Container, Row, Col } from 'reactstrap';
import ReactBootstrapSlider from 'react-bootstrap-slider';
import BootstrapSlider from 'bootstrap-slider/dist/css/bootstrap-slider.min.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export class AddTask extends decodeURIComponent {
    static displayName = AddTask.name;
    state = {
        projectId: '',
        taskId: '',
        taskDescription: '',
        parentTaskId: '',
        parentDescription: '',
        priority: 0,
        status: 0,
        startDate: null,
        endDate: null,
        taskOwnerId: '',
        taskOwnerName: '',
        tskItems: [],
        IsSetDates: false
    }
    componentDidMount() { }


    render() {
        return <Container>
            <Row>
                <Form onSubmit={this.submitNew}>
                    <FormGroup>
                        <Row>
                            <Col style={{ minWidth: '125px' }}>
                                <Label for="projectId">Project</Label>
                            </Col>
                            <Col style={{ minWidth: '300px' }}>

                                <Input type="text" name="projectId" onChange={this.onChange} value={this.state.projectId}
                                    disabled={true} />

                            </Col>
                            <Col style={{ minWidth: '300px' }}>
                                <ProjectSearchModal onSelect={this.onProjectSelect} />
                            </Col>
                            <Col />
                        </Row>
                    </FormGroup>
                    <FormGroup>
                        <Row>
                            <Col style={{ minWidth: '125px' }}>
                                <Label for="taskDescription">Task</Label>
                            </Col>
                            <Col style={{ minWidth: '300px' }}>
                                <Input type="text" name="taskDescription" onChange={this.onChange}
                                    value={this.state.taskDescription} />
                            </Col>
                            <Col style={{ minWidth: '300px' }} />
                            <Col />
                        </Row>
                    </FormGroup>
                    <FormGroup>
                        <Row>
                            <Col ></Col>
                            <Col style={{
                                minWidth: '200px'
                            }}>
                                <Input name="IsSetDates"
                                    type="checkbox"
                                    value={this.state.IsSetDates}
                                    onChange={this.handleCheckboxChange}

                                /><Label>Set start and end Dates</Label>
                            </Col>
                            <Col />
                            <Col />
                        </Row>
                    </FormGroup>
                    <FormGroup>
                        <Row>
                            <Col style={{ minWidth: '125px' }}>
                                <Label for="Priority">Priority</Label>
                            </Col>
                            <Col>
                                <ReactBootstrapSlider
                                    value={this.state.priority}
                                    change={this.sliderChange}
                                    slideStop={this.sliderChange}
                                    step={1}
                                    max={30}
                                    min={0}
                                    orientation="horizontal"
                                    reversed={false}
                                />
                            </Col>
                            <Col style={{ minWidth: '300px' }} />
                            <Col />
                        </Row>

                    </FormGroup>
                    <FormGroup>
                        <Row>
                            <Col style={{ minWidth: '125px' }}>
                                <Label for="parentTaskId">Parent Task</Label>
                            </Col>
                            <Col style={{ minWidth: '300px' }}>
                                <Input type="text" name="parentTaskId" onChange={this.onChange}
                                    value={this.state.parentTaskId} disabled={true} />
                            </Col>
                            <Col style={{ minWidth: '300px' }}>
                                <TaskSearchModal onSelect={this.onParentTaskSelect}
                                    onGetParam={this.onPrjParam} />
                            </Col>
                            <Col />
                        </Row>
                    </FormGroup>

                    <FormGroup>
                        <Row>
                            <Col style={{
                                minWidth: '110px'
                            }}>
                                <Label for="startDate">Start Date</Label>
                            </Col>
                            <Col style={{ minWidth: '200px' }}>
                                <DatePicker
                                    dateFormat="yyyy/MM/dd"
                                    selected={this.state.startDate}
                                    onChange={date => this.onStartDateChange(date)}
                                    isClearable
                                    disabled={!this.state.IsSetDates}
                                />
                            </Col>
                            <Col style={{
                                minWidth: '110px'
                            }}>
                                <Label for="endDate">End Date</Label>
                            </Col>
                            <Col style={{ minWidth: '300px' }}>
                                <DatePicker
                                    dateFormat="yyyy/MM/dd"
                                    selected={this.state.endDate}
                                    onChange={date => this.onEndDateChange(date)} isClearable
                                    disabled={!this.state.IsSetDates}
                                />
                            </Col>
                        </Row>
                    </FormGroup>
                    <FormGroup>
                        <Row>
                            <Col style={{ minWidth: '125px' }}>
                                <Label for="taskOwnerId">Task Owner</Label>
                            </Col>
                            <Col style={{ minWidth: '300px' }}>
                                <Input type="text" name="taskOwnerId" onChange={this.onChange}
                                    value={this.state.taskOwnerId} disabled={true} />
                            </Col>
                            <Col style={{ minWidth: '300px' }} >
                                <UserSearchModal onSelect={this.onTaskOwnerSelect} />
                            </Col>
                            <Col />
                        </Row>

                    </FormGroup>
                    <FormGroup>
                        <Row>
                            <Col />
                            <Col>
                                <Button
                                    color="secondary"
                                    style={{ minWidth: "200px" }}>Add</Button>
                            </Col>
                            <Col ><Button
                                color="secondary"
                                style={{ minWidth: "200px" }} onClick={() => this.onClearForm()}>Clear</Button>
                            </Col>
                            <Col />
                        </Row>
                    </FormGroup>
                </Form>
            </Row>
        </Container>;
    }
}


   
}