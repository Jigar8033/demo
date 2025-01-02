import React, { useState, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Filter = () => {
  const [requisitions, setRequisitions] = useState([]); // State to hold fetched data
  const [loading, setLoading] = useState(true); // State to manage loading status
  const navigate = useNavigate();
  const handleEditClick = (id) => {
    navigate(`/Troubleshooting/${id}`);
  };
  
  
  const fetchRequisitions = async () => {
    try {
      const response = await fetch('https://localhost:7280/api/Requisitionentry');
      if (response.ok) {
        const data = await response.json();
        setRequisitions(data); // Update state with fetched data
      } else {
        console.error('Failed to fetch requisitions:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching requisitions:', error);
    } finally {
      setLoading(false); // Stop loading
    }
  };
  // Fetch data from the API
  useEffect(() => {
    fetchRequisitions();
     // Fetch data once when the component mounts
}, []);
const handleDelete = (id) => {
    if (window.confirm("Are you sure to delete this employee")) {    
        axios.delete(`https://localhost:7280/api/Requisitionentry/${id}`)
            .then((result) => {
                if (result.status === 200) {
                    toast.success('Employee has been deleted');
                    //getData();
                    fetchRequisitions();
                }
            })
            .catch((error) => {
                toast.error(error.message);
            });
    }
};
  return (
    <div className="main-content">
      <div className="page-content">
      <div className="container-fluid">
              
              <div
                className="container-fluid py-1"
                style={{
                    maxWidth: '2500px',
                    padding: '1px',
                    backgroundColor: '#f8f9fa',
                }}
                >
                <div className="row justify-content-center">
                    <div
                    className="col-md-10"
                    style={{
                        backgroundColor: 'white',
                        padding: '20px',
                        borderRadius: '10px',
                        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                    }}
                    >
                    <form>
                        <div className="row align-items-center">
                        <div className="col-md-3 mb-3">
                            <label htmlFor="status" className="form-label">
                            Status
                            </label>
                            <input
                            type="text"
                            className="form-control"
                            id="search"
                            placeholder="Search..."
                            />
                        </div>
                        <div className="col-md-3 mb-3">
                            <label htmlFor="initiatorName" className="form-label">
                            jigar ashvini Name
                            </label>
                            <select
                            className="form-select"
                            id="initiatorName"
                            // value={Initiator_Name}
                            // onChange={(e) => setSelectedInitiator(e.target.value)}
                            >
                            <option value="">-- Select Initiator Name --</option>
                            {/* {initiatorNames.map((initiator) => (
                                <option key={initiator.PersonID} value={initiator.PersonName}>
                                {initiator.PersonName}
                                </option>
                            ))} */}
                            </select>
                        </div>
                        <div className="col-md-3 mb-3">
                            <label htmlFor="search" className="form-label">
                            Search
                            </label>
                            <input
                            type="text"
                            className="form-control"
                            id="search"
                            placeholder="Search..."
                            />
                        </div>
                        <div className="col-md-3 mb-3 d-flex align-items-end">
                            <button type="submit" className="btn rounded-pill btn-info">
                            Search
                            </button>
                        </div>
                        </div>
                    </form>
                    </div>
                </div>
                </div>
             
            </div>
            <br/>
            <br/>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                <h2 className="mb-sm-0">Requisition Entry Table</h2>
              </div>
            </div>
          </div>
          <Table className="table table-nowrap">
            <thead>
              <tr>
                <th scope="col">Req No</th>
                <th scope="col">Status</th>
                <th scope="col">Due Date</th>
                <th scope="col">Initiator Name</th>
                <th scope="col">Item Name</th>
                <th scope="col">Purpose</th>
                <th scope="col">Quantity</th>
                <th scope="col">UOM</th>
                <th scope="col">EPO</th>
                <th scope="col">EPO Line</th>
                <th scope="col">Supplier Name</th>
                <th scope="col">Attachment</th>
                <th scope="col">Query in Req.</th>
                <th scope="col">Resolve the query</th>
                <th scope="col">Edit</th>
                <th scope="col">Void</th>
                <th scope="col">Details</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="14" className="text-center">
                    Loading...
                  </td>
                </tr>
              ) : requisitions.length > 0 ? (
                requisitions.map((req, index) => {
                  const baseReqNo = 1000; // Starting number
                  const reqNoIncrement = baseReqNo + index; // Increment by 1 for each row
          
                  // Function to extract initials
                  const getInitials = (name) => {
                    if (!name || typeof name !== 'string') {
                      return ''; // Return an empty string if name is null, undefined, or not a string
                    }
                    
                    const nameParts = name.split(/[.\s]+/); // Split by space or period
                    const firstInitial = nameParts[0]?.charAt(0)?.toUpperCase() || ''; // First letter of first name
                    const secondInitial = nameParts[1]?.charAt(0)?.toUpperCase() || ''; // First letter of last name
                    return `${firstInitial}${secondInitial}`; // Combine initials
                  };
                  
          
                  const initials = getInitials(req.Initiator_Name);
                  const reqNo = `${reqNoIncrement}${initials}`; // Combine incremented base number with initials
          
          
                  return (
                    <tr key={req.Initiator_ID}>
                      <td>{reqNo}</td>
                      <td>
                        <span
                          style={{
                            color: req.Status === 'Req Received' ? '#1D3557' : 
                                  req.Status === 'Ask For Quotation' ? '#4682B4' : 
                                  req.Status === 'Pending for Approval' ? '#B8860B' :
                                  req.Status === 'EPO CREATED' ? '#228B22' : 
                                  req.Status === 'In Transit' ? '#FF8C00' : 
                                  req.Status === 'Partial Receipt' ? '#8B4513' : 
                                  req.Status === 'Req Closed' ? '#556B2F' : 
                                  req.Status === 'Req Cancelled' ? '#DC143C' : 
                                  req.Status === 'Item Issued' ? '#9932CC' : 'black'
                          }}
                        >
                          {req.Status || req.status}
                        </span>
                      </td>
                      <td>{req.Due_Date}</td>
                      <td>{req.Initiator_Name}</td>
                      <td>{req.Item_Name}</td>
                      <td>{req.Purpose}</td>
                      <td>{req.qty}</td>
                      <td>{req.UOM}</td>
                      <td></td>
                      <td></td>
                      <td>{req.Suggested_supplier}</td>
                      <td>
                        {req.Attchment ? req.Attchment.split('/').pop() : 'No Attachment'}
                      </td>
                      <td>
                        <input type="checkbox" />
                      </td>
                      <td>
                        <input type="checkbox" />
                      </td>
                      <td>
                        <Button
                          variant="warning"
                          size="sm"
                          onClick={() => handleEditClick(req.Initiator_ID)}
                        >
                          Edit
                        </Button>
                      </td>
                      <td>
                        <Button variant="info" size="sm">Void</Button>
                      </td>
                      <td>
                        <Button variant="primary" size="sm">Details</Button>
                      </td>
                    </tr>

                  );
                })
              ) : (
                <tr>
                  <td colSpan="14" className="text-center">
                    No data available
                  </td>
                </tr>
              )}
            </tbody>
          </Table>

        </div>
      </div>
    </div>
  );
};

export default Filter;
