import React, { useState, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 

const Purposeofpurchase = () => {
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
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                  <h2 className="mb-sm-0">Purpose of Purchase</h2>
                </div>
              </div>
            </div>
            <Table className="table table-nowrap">
              <thead>
                <tr>
                  <th scope="col">Purpose of Purchase</th>
                  <th scope="col">Item Name</th>
                  <th scope="col">Quantity</th>
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
                        <td>{reqNo} -- {req.Initiator_Name} -- {req.Department} -- {req.Purpose} </td>
                        <td>{req.Item_Name}</td>
                        <td>{req.qty}</td>                       
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

export default Purposeofpurchase
