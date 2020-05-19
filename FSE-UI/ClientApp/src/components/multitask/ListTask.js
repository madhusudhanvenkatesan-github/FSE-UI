import React, { Component } from 'react'
import { Button, Form, FormGroup, Input, Label, Container, Row, Col } from 'reactstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import { PROJECT_SERVICE_URL } from '../utilities';
import SearchModel from '../project/SearchModel';
import '../../custom.css';

export class ListTask extends Component {
    static displayName = ListTask.name;
    state = {
        dateTimeMinValue: '0001-01-01',
        tskItems: [],
        projectId: ''

    }
    componentDidMount() { }

    onProjectSelect = (prjId, prjNm) => {
        this.setState({ projectId: prjId });
        this.getAllTaskForProj(prjId);

    }
    getAllTaskForProj = (prjId) => {
        if (prjId !== '') {
            fetch(`${PROJECT_SERVICE_URL}/GetAllActiveTask?projId=${prjId}`)
                .then(res => {
                    if (res.status == 200)
                        return res.json();
                    else
                        return null;
                })
                .then(resjsn => {
                    if (resjsn != null)
                        this.setState({ tskItems: resjsn })
                    else
                        this.setState({ tskItems: [] });
                })
                .catch(err => {
                    alert(err);
                    console.log(err);
                });
        }
    }

    endTask = (prjId, taskId) => {
        let confirmClose = window.confirm("Are you sure you want to suspend project");
        if (confirmClose) {
            const searchParam = new URLSearchParams();
            searchParam.append('projId', prjId);
            searchParam.append('tskId', taskId);
            fetch(`${PROJECT_SERVICE_URL}/EndTask?${searchParam.toString()}`, {
                method: 'put'
            })
                .then(response => {
                    this.getAllTaskForProj(prjId);
                })
                .catch(err => {
                    console.log(err);
                    alert(err);
                });
        }

    }
    sortGrid = sortAttribute => {
        if (sortAttribute === 'sdt') {
            this.setState({
                prjItems: this.state.prjItems.sort((p1, p2) => {
                    var p1Date = new Date(p1.startDate);
                    var p2Date = new Date(p2.startDate);
                    if ((p1Date.getFullYear() == 1) || (p2Date.getFullYear() == 1))
                        return -1;

                    return (p1Date - p2Date);
                })
            });
        }
        if (sortAttribute === 'edt') {
            this.setState({
                prjItems: this.state.prjItems.sort((p1, p2) => {
                    var p1Date = new Date(p1.endDate);
                    var p2Date = new Date(p2.endDate);
                    if ((p1Date.getFullYear() == 1) || (p2Date.getFullYear() == 1))
                        return -1;
                    return (p1Date - p2Date);
                })
            });
        }
        if (sortAttribute === 'prty') {
            this.setState({
                prjItems: this.state.prjItems.sort((p1, p2) => {
                    return (p1.priority - p2.priority)
                })
            });
        }
        if (sortAttribute === 'cmpltd') {
            this.setState({
                prjItems: this.state.prjItems.sort((p1, p2) => {
                    return (p1.completedTaskCount - p2.completedTaskCount)
                })
            });
        }
    }

    render() {
        const gridItems = this.state.tskItems;
        return <Container>
            <Row>
                <Col style={{ minWidth: '125px' }}>
                    <Label for="projectId">Project</Label>
                </Col>
                <Col style={{ minWidth: '250px' }}>

                    <Input type="text" name="projectId" onChange={this.onChange} value={this.state.projectId}
                        disabled={true} />
                </Col>
                <Col style={{ minWidth: '200px' }}>
                    <SearchModel onSelect={this.onProjectSelect} />
                </Col>
                <Col style={{ minWidth: '20px' }}>
                    <Label>Sort:</Label>
                </Col>
                <Col style={{ minWidth: '40px' }}>
                    <Button color="secondary"
                        style={{ minWidth: "50px" }} onClick={() => this.sortGrid('sdt')}>
                        Start Date</Button>
                </Col>
                <Col style={{ minWidth: '40px' }}>
                    <Button color="secondary"
                        style={{ minWidth: "50px" }} onClick={() => this.sortGrid('edt')}>End date</Button>
                </Col>
                <Col style={{ minWidth: '40px' }}>
                    <Button color="secondary"
                        style={{ minWidth: "50px" }} onClick={() => this.sortGrid('prty')}>Priority</Button>
                </Col>
            </Row>
            <Row><Col ><hr style={{
                margin: 'auto 10px',
                border: '1.5px solid rgb(150, 150, 150)'
            }} /><br /></Col>
            </Row>
            <Row>
                <Col>
                    <ListGroup >
                        {
                            ((!gridItems) || (gridItems.length <= 0)) ?
                                <ListGroup.Item variant="danger">No Item Found </ListGroup.Item>
                                : gridItems.map(item => (
                                    <div>
                                        <ListGroup.Item  >
                                            <Row>
                                                <Col style={{ minWidth: '40px' }}>
                                                    <b>Task</b>
                                                    <br />
                                                    {item.taskDescription}
                                                </Col>
                                                <Col style={{ minWidth: '200px', textAlign: "left" }}>
                                                    <b>Parent</b>
                                                    <br />
                                                    {item.parentDescription}
                                                </Col>
                                                <Col style={{ minWidth: '80px', textAlign: 'left' }}>
                                                    <b>Priority</b><br />   {item.priority}
                                                </Col>
                                                <Col style={{ minWidth: '100px', textAlign: 'left' }}>
                                                    <b>Start</b>
                                                    <br />
                                                    {(item.startDate === this.state.dateTimeMinValue) ?
                                                        '' : item.startDate}
                                                </Col >
                                                <Col style={{ minWidth: '200px', textAlign: 'left' }}>
                                                    <b>End</b>
                                                    <br />
                                                    {(item.endDate === this.state.dateTimeMinValue) ?
                                                        '' : item.endDate}
                                                </Col>
                                                <Col style={{ minWidth: '100px' }}>
                                                    <Button color="warning"
                                                        onClick={() => this.props.onToggle(item)}
                                                        style={{ minWidth: "80px" }}>
                                                        Edit</Button>

                                                </Col>
                                                <Col style={{ minWidth: '100px' }}>
                                                    <Button color="danger" onClick={() =>
                                                        this.endTask(item.projectId, item.taskId)}
                                                        style={{ minWidth: "100px" }}>
                                                        End Task</Button>
                                                </Col>
                                            </Row>
                                            <Row style={{ minHeight: "10px" }}>


                                                <Col style={{ minWidth: '100px', textAlign: 'left' }}>

                                                </Col>
                                                <Col style={{ minWidth: '100px', textAlign: 'left' }}>

                                                </Col>

                                            </Row>
                                        </ListGroup.Item>

                                    </div>

                                ))

                        }
                    </ListGroup>
                </Col>
            </Row>
        </Container>;
    }
}
export default ListTask;