import React from 'react'
import axios from "axios"; // Import axios
import { useNavigate  } from 'react-router-dom';
import { useState, useEffect } from "react";
import { Table } from "react-bootstrap"; 
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';

const Troubleshooting = () => {

  const [Department, setDepartment] = useState('');
  const [departments, setDepartments] = useState([]);
  const [itemTypes, setItemTypes] = useState([]);
  const [Item_Name, setItemName] = useState('');
  const [Item_Type, setItemType] = useState('');
  const [qty, setQuantity] = useState('');
  const [uom, setUom] = useState([]);
  const [UOM, setUomTypes] = useState('');
  const [Due_Date, setDueDate] = useState('');
  const [Suggested_supplier, setSuggestedSupplier] = useState('');
  const [Purpose, setPurpose] = useState('');
  const [Remark, setRemark] = useState('');
  const [Attchment, setAttachment] = useState(null);
  const [formData, setFormData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [Personname, setPersonname] = useState('');
  const [Personnames, setPersonnames] = useState([]);
  
    const [Initiator_Name, setSelectedInitiator] = useState("");
  const [initiatorNames, setInitiatorNames] = useState([]);
  const fetchInitiatorName = () => {
    axios
      .get("https://localhost:7280/api/Employeedetail")
      .then((response) => {
        if (Array.isArray(response.data)) {
          setInitiatorNames(response.data); // Set the state with the response data
          console.log("Fetched initiator names:", response.data); // Debugging
        } else {
          console.error("Expected an array but got:", response.data);
          setInitiatorNames([]); // Set an empty array if response is not as expected
        }
      })
      .catch((error) => {
        console.error("Error fetching initiator names:", error);
        setInitiatorNames([]); // Set an empty array on error
      });
  };


  
  // Fetch the department name
  const fetchInitiatorPos = () => {
    axios
      .get("https://localhost:7280/api/Emppos")
      .then((response) => {
        if (Array.isArray(response.data)) {
          setDepartments(response.data);
        } else {
          console.error("Expected an array but got:", response.data);
          setDepartments([]);
        }
      })
      .catch((error) => {
        console.error("Error fetching departments:", error);
        setDepartments([]);
      });
  };
  // Fetch Item Name
  const fetchItemTypes = () => {
    axios
      .get("https://localhost:7280/api/Item")
      .then((response) => {
        if (Array.isArray(response.data)) {
          setItemTypes(response.data);
        } else {
          console.error("Expected an array but got:", response.data);
          setItemTypes([]);
        }
      })
      .catch((error) => {
        console.error("Error fetching item types:", error);
        setItemTypes([]);
      });
  };
  // Fetch UOM
  const fetchUom = () => {
    axios
      .get("https://localhost:7280/api/uom")
      .then((response) => {
        if (Array.isArray(response.data)) {
          setUom(response.data);
        } else {
          console.error("Expected an array but got:", response.data);
          setUom([]);
        }
      })
      .catch((error) => {
        console.error("Error fetching UOMs:", error);
        setUom([]);
      });
  }; 
  // Use useEffect to call the function when the component mounts
  useEffect(() => {
    //fetchPersonName();
    fetchInitiatorName();
    fetchInitiatorPos();
    fetchItemTypes();
    fetchUom();
  }, []);

  const handleFinalSubmit = () => {
    const navigate = useNavigate;
    if (formData.length === 0) {
      toast.error("No data to submit!");
      return;
    }
  
    axios
      .post("https://localhost:7280/api/Requisitionentry", formData) // Send bulk data
      .then((response) => {
        console.log("Data saved successfully:", response.data);
        toast.success("Data saved successfully!");
  
        // Clear form data after successful submission
        setFormData([]);
  
        // Optionally close the modal
        handleCloseModal();

        navigate('/Requisitiondata')
      })
      .catch((error) => {
        console.error("Error saving data:", error);
        toast.error("Failed to save data. Please try again.");
      });
  };
  

  const handleCloseModal = () => {
    setShowModal(false); // Hide the modal
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormData((prevData) => [
      ...prevData,
      {
        Initiator_Name,
        //Personname,
        Department,
        Item_Name,
        Item_Type,
        qty,
        UOM,
        Due_Date,
        Suggested_supplier,
        Purpose,
        Remark,
        Attchment: Attchment ? Attchment.name : "", // store only file name
      },
    ]);
    // Reset form fields
    setSelectedInitiator('');
    setPersonname('');
    setDepartment('');
    setItemName('');
    setItemType('');
    setQuantity('');
    setUomTypes('');
    setDueDate('');
    setSuggestedSupplier('');
    setPurpose('');
    setRemark('');
    setAttachment(null);
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
             
              <div className="container-fluid py-1" style={{maxWidth: '2500px', padding: '1px', backgroundcolor: '#f8f9fa'}}>
                <div className="row justify-content-center">
                  <div className="col-md-10" style={{ backgroundColor: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
                    <form onSubmit={handleSubmit}>
                      <div className="row mb-3">
                      <div className="col-md-4 mb-3">
                        <label htmlFor="initiatorName" className="form-label">Initiator Name</label>
                        <select
                          className="form-select"
                          id="initiatorName"
                          value={Initiator_Name}
                          onChange={(e) => setSelectedInitiator(e.target.value)}
                        >
                          <option value="">-- Select Initiator Name --</option>
                          {initiatorNames.map((initiator) => (
                            <option key={initiator.PersonID} value={initiator.PersonName}>
                              {initiator.PersonName}
                            </option>
                          ))}

                        </select>
                      </div>
                      <div className="col-md-4 mb-3">
                        <label htmlFor="department" className="form-label">Department</label>
                        <select
                          className="form-select"
                          id="department"
                          value={Department}
                          onChange={(e) => setDepartment(e.target.value)}
                        >
                          <option value="">-- Select Department --</option>
                          {departments.map((dep) => (
                            <option key={dep.person_id} value={dep.emp_position}>
                              {dep.emp_position}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="col-md-4 mb-3">
                        <label htmlFor="itemName" className="form-label">Item Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="itemName"
                          placeholder="Item Name"
                          value={Item_Name}
                          onChange={(e) => setItemName(e.target.value)}
                        />
                      </div>

                      <div className="col-md-4 mb-3">
                        <label htmlFor="itemType" className="form-label">Item Type</label>
                        <select
                          className="form-select"
                          id="itemType"
                          value={Item_Type}
                          onChange={(e) => setItemType(e.target.value)}
                        >
                          <option value="">-- Select Item Type --</option>
                          {itemTypes.map((item) => (
                            <option key={item.id} value={item.item_Name}>
                              {item.item_Name}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="col-md-4 mb-3">
                        <label htmlFor="quantity" className="form-label">Quantity</label>
                        <input
                          type="number"
                          className="form-control"
                          id="quantity"
                          placeholder="Quantity"
                          value={qty}
                          onChange={(e) => setQuantity(e.target.value)}
                        />
                      </div>

                      <div className="col-md-4 mb-3">
                        <label htmlFor="uom" className="form-label">UOM</label>
                        <select
                          className="form-select"
                          id="uom"
                          value={UOM}
                          onChange={(e) => setUomTypes(e.target.value)}
                        >
                          <option value="">-- Select UOM --</option>
                          {uom.map((unit) => (
                            <option key={unit.id} value={unit.uom_name}>
                              {unit.uom_name}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="col-md-4 mb-3">
                        <label htmlFor="dueDate" className="form-label">Due Date</label>
                        <input
                          type="date"
                          className="form-control"
                          id="dueDate"
                          value={Due_Date}
                          onChange={(e) => setDueDate(e.target.value)}
                        />
                      </div>


                      <div className="col-md-4 mb-3">
                        <label htmlFor="suggestedSupplier" className="form-label">Suggested Supplier</label>
                        <input
                          type="text"
                          className="form-control"
                          id="suggestedSupplier"
                          placeholder="Suggested Supplier"
                          value={Suggested_supplier}
                          onChange={(e) => setSuggestedSupplier(e.target.value)}
                        />
                      </div>


                      <div className="col-md-4 mb-3">
                        <label htmlFor="uploadFile" className="form-label">Upload File</label>
                        <input
                          type="file"
                          className="form-control"
                          id="uploadFile"
                          aria-label="Upload"
                          onChange={(e) => setAttachment(e.target.files[0])}
                        />
                      </div>


                      <div className="col-md-4 mb-3">
                        <label htmlFor="purpose" className="form-label">Purpose</label>
                        <textarea
                          className="form-control"
                          id="purpose"
                          placeholder="Purpose"
                          value={Purpose}
                          onChange={(e) => setPurpose(e.target.value)}
                        ></textarea>
                      </div>


                      <div className="col-md-4 mb-3">
                        <label htmlFor="remark" className="form-label">Remark</label>
                        <textarea
                          className="form-control"
                          id="remark"
                          placeholder="Remark"
                          value={Remark}
                          onChange={(e) => setRemark(e.target.value)}
                        ></textarea>
                      </div>

                      </div>

                      <div>
                        <button type="submit" className="btn rounded-pill btn-info">Add</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>             
            </div>
            <br/>
            <br/>
            <br/>
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
                  {formData.map((data, index) => (                   
                    <tr key={`${index}-${data.itemName}` }> {/* Ensure uniqueness by combining index with another unique field */}
                      <th scope="row">{index + 1}</th>
                      <td>{data.Initiator_Name}</td>                      
                      <td>{data.Department}</td>
                      <td>{data.Item_Name}</td>
                      <td>{data.Item_Type}</td>
                      <td>{data.qty}</td>
                      <td>{data.UOM}</td>
                      <td>{data.Due_Date}</td>
                      <td>{data.Suggested_supplier}</td>
                      <td>{data.Purpose}</td>
                      <td>{data.Remark}</td>
                      <td>{data.Attchment}</td>
                      <td>
                        <a href="javascript:void(0);" className="link-success">
                          Edit <i className="ri-pencil-line align-middle"></i>
                        </a>
                      </td>
                      <td>
                        <a href="javascript:void(0);" className="link-danger">
                          Delete <i className="ri-delete-bin-line align-middle"></i>
                        </a>
                      </td>
                    </tr>
                    
                  ))}
                  
                </tbody>
                  
              </Table>
              <div>
                <button
                  type="button"
                  className="btn rounded-pill btn-info"
                  onClick={handleFinalSubmit}
                >
                  Submit
                </button>

                {/* Modal */}
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
        </div>
  )
}

export default Troubleshooting
