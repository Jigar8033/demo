import React, { useState, useEffect } from 'react';
import { Table, Button, Modal, Form } from 'react-bootstrap';
const usage_of_database = () => {
  return (
    <>
          <div className="main-content">
        <div className="page-content">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                            <h4 className="mb-sm-0">EPO Entry</h4>
                            
                        </div>
                    </div>
                </div>
                <div className="row">
                <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                
              </div>
            </div>
            <Table className="table table-nowrap">
              <thead>
                <tr>
                  <th scope="col">Status</th>
                  <th scope="col">Req No</th>
                  <th scope="col">Due Date</th>
                  <th scope="col">Initiator Name</th>
                  <th scope="col">Item Name</th>
                  <th scope="col">Item Type</th>
                  <th scope="col">Item Qty</th>
                  <th scope="col">UOM</th>
                  <th scope="col">Quotation Type</th>
                  <th scope="col">Attachments</th>
                  <th scope="col">EPO Number</th>
                  <th scope="col">Line No.</th>
                  <th scope="col">EPO Status</th>
                  <th scope="col">Supplier Name</th>
                  <th scope="col">EPO Attachment</th>
                  <th scope="col">Performa Invoice</th>
                  <th scope="col">Add</th>
                  <th scope="col">Details</th>
                </tr>
              </thead>
              <tbody>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                    <>
                        <input type="text"></input>
                    </>
                </td>
                <td>
                    <>
                        <input type="text"></input>
                    </>
                </td>
                <td>
                    <select>
                          <option value="">-- Select EPO Status--</option>
                          <option value="Status">Status</option>
                          <option value="Not Approved">Not Approved</option>
                          <option value="Approved & Send">Approved & Send</option>
                          <option value="Already Send">Already Send</option>
                          <option value="Void">Void</option>
                    </select>
                </td>
                <td>
                     <select>
                          <option value="">-- Select Supplier Name--</option>
                     </select>
                </td>
                <td></td>
                <td>
                    <input type="checkbox" />
                </td>
                <td>
                    <Button variant="warning" size="sm">Add</Button>
                </td>
                <td>
                    <Button variant="info" size="sm">Details</Button>
                </td>

              </tbody>
            </Table>
          </div>
        </div>
                </div>
            </div>
        </div>
        
    </div>
    </>
  )
}

export default usage_of_database
