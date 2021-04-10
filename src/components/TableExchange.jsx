import React from 'react';
import {Button} from "react-bootstrap";
const TableExchange = () => {
    return (
        <div>
            <h2 className="mb-3">Exchange</h2>
            <div className="card shadow p-3">
                <table className="table table-striped table-responsive">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Acronym</th>
                            <th>Mic</th>
                            <th>Country</th>
                            <th>City</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td>Acronym</td>
                            <td>Mic</td>
                            <td>Country</td>
                            <td>City</td>
                        </tr>
                        <tr>
                            <td>Name</td>
                            <td>Acronym</td>
                            <td>Mic</td>
                            <td>Country</td>
                            <td>City</td>
                        </tr>
                        <tr>
                            <td>Name</td>
                            <td>Acronym</td>
                            <td>Mic</td>
                            <td>Country</td>
                            <td>City</td>
                        </tr>
                        <tr>
                            <td>Name</td>
                            <td>Acronym</td>
                            <td>Mic</td>
                            <td>Country</td>
                            <td>City</td>
                        </tr>
                        <tr>
                            <td>Name</td>
                            <td>Acronym</td>
                            <td>Mic</td>
                            <td>Country</td>
                            <td>City</td>
                        </tr>
                        <tr>
                            <td colSpan="5">
                                <Button variant="primary" href="#" className="w-100">See all Exchange List</Button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TableExchange
