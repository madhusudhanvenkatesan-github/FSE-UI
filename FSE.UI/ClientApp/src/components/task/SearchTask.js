﻿import React, { Component } from 'react'
import { Button, Form, FormGroup, Input, Label, Table, Row, Col, Container } from 'reactstrap';
import { PRJCT_SERVICE_URL } from '../constants';
export class SearchTask extends Component {
    static displayName = SearchTask.name;
    state = {

        tskItems: []
    }
    getTasks = () => {
        var prjId = this.props.onGetParam();

        if (prjId !== '') {
            fetch(`${PRJCT_SERVICE_URL}/GetAllActiveTask?projId=${prjId}`)
                .then(res => {
                    console.log("***********************");
                    console.log(res.status)
                    console.log("***********************");
                    if (res.status == 200)
                        return res.json();
                    else
                        return null;
                })
                .then(resjsn => {
                    console.log("***********************");
                    console.log(resjsn);
                    if (resjsn != null)
                        this.setState({ tskItems: resjsn })
                    console.log("***********************");
                })
                .catch(err => {
                    alert(err);
                    console.log(err);
                });
        }
    }
    componentDidMount() {
        this.getTasks();
    }
    onRowSelect = (tskId, tskNm) => {

        //this.state.tskItems.filter(item => item.taskDescription.in
        this.props.onSelect(tskId, tskId);
        this.props.onToggle();
    }
    render() {
        const items = this.state.tskItems;
        return <Table striped>

            <thead className="thead-dark">
                <tr>
                    <th style={{ textAlign: "center" }}></th>
                    <th>Task Id</th>
                    <th>Task description</th>
                </tr>
            </thead>


            <tbody>
                {((!items) || (items.length <= 0)) ?
                    <tr><td colSpan="8" align="center"><b>No Tasks yet add or project id is empty</b></td></tr>
                    : items.map(item => (
                        <tr key={item.projId}>
                            <th scope="row">
                                <Button
                                    color="info"
                                    style={{ minWidth: "10px" }}
                                    onClick={() => this.onRowSelect(item.taskId, item.taskDescription)}>Select</Button>
                            </th>
                            <td>
                                {item.taskId}
                            </td>
                            <td>
                                {item.taskDescription}
                            </td>
                        </tr>
                    ))}
            </tbody>
        </Table>;
    }
}
export default SearchTask;