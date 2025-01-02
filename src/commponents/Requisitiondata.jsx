import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Modal, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Filter = () => {
  const [requisitions, setRequisitions] = useState([]);  // State to store fetched requisition data
  const [showModal, setShowModal] = useState(false); // Modal state
  const [modalMessage, setModalMessage] = useState(""); // Modal message
  const [initiatorName, setInitiatorName] = useState(""); // Form state for Initiator Name

  useEffect(() => {
    // Fetch requisition data when the component mounts
    axios.get('/api/requisitions')
      .then((response) => {
        setRequisitions(response.data);  // Assuming the response data is an array of requisition objects
      })
      .catch((error) => {
        toast.error('Error fetching requisition data');
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission logic
    console.log('Form submitted with initiator:', initiatorName);
  };

  const handleFinalSubmit = () => {
    // Logic to handle final submission
    setShowModal(true);  // Show modal on submit
    setModalMessage('Requisition data has been submitted successfully.');
  };

  const handleCloseModal = () => {
    setShowModal(false); // Close modal
  };

  return (
    <div className="main-content">
      <div className="page-content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                <h4 className="mb-sm-0">Requisition Entry Form</h4>
              </div>
            </div>
          </div>
          <div className="container-fluid py-1" style={{ maxWidth: '2500px', padding: '1px', backgroundColor: '#f8f9fa' }}>
            <div className="row justify-content-center">
              <div className="col-md-10" style={{ backgroundColor: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
                <form onSubmit={handleSubmit}>
                  <div className="row mb-3">
                    <div className="col-md-4 mb-3">
                      <label htmlFor="initiatorName" className="form-label">Initiator Name</label>
                      <input
                        type="text"
                        id="initiatorName"
                        className="form-control"
                        value={initiatorName}
                        onChange={(e) => setInitiatorName(e.target.value)}  // Handle input change
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Requisition Entry Table */}
        <br />
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                <h4 className="mb-sm-0">Requisition Entry Table</h4>
              </div>
            </div>
          </div>
          <Table className="table table-nowrap">
            <thead>
              <tr>
                <th scope="col">Sr. No</th>
                <th scope="col">Initiator Name</th>
                <th scope="col">Department</th>
                <th scope="col">Item Name</th>
                <th scope="col">Item Type</th>
                <th scope="col">Quantity</th>
                <th scope="col">UOM</th>
                <th scope="col">Due Date</th>
                <th scope="col">Suggested Supplier</th>
                <th scope="col">Purpose</th>
                <th scope="col">Remark</th>
                <th scope="col">Attachment</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {requisitions.map((req, index) => (
                <tr key={req.id}> {/* Assuming each requisition has an 'id' */}
                  <td>{index + 1}</td>
                  <td>{req.initiatorName}</td>
                  <td>{req.department}</td>
                  <td>{req.itemName}</td>
                  <td>{req.itemType}</td>
                  <td>{req.quantity}</td>
                  <td>{req.uom}</td>
                  <td>{req.dueDate}</td>
                  <td>{req.supplier}</td>
                  <td>{req.purpose}</td>
                  <td>{req.remark}</td>
                  <td>{req.attachment}</td>
                  <td><button>Edit</button></td>
                  <td><button>Delete</button></td>
                </tr>
              ))}
            </tbody>
          </Table>

          {/* Modal for Final Submit */}
          <button
            type="button"
            className="btn rounded-pill btn-info"
            onClick={handleFinalSubmit}
          >
            Submit
          </button>

          <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
              <Modal.Title>Form Status</Modal.Title>
            </Modal.Header>
            <Modal.Body>{modalMessage}</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseModal}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Filter;
