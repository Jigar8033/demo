import React, { useState, useEffect } from 'react';
import { Table, Button, Modal, Form } from 'react-bootstrap';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const NewPurchaseSuggestion = () => {
    const [requisitions, setRequisitions] = useState([]); // State to hold fetched data
  const [loading, setLoading] = useState(true); // State to manage loading status
  const [showDropdownBox, setShowDropdownBox] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [dropdownValues, setDropdownValues] = useState({}); // State for dropdown values
  const navigate = useNavigate();
  const handleEditClick = (id) => {
    navigate(`/Troubleshooting/${id}`);
  };
  

  const handleDropdownChange = (reqNo, value) => {
    // Update the state with the selected value
    // setDropdownValues((prevState) => ({
    //   ...prevState,
    //   [reqNo]: value,
    // }));

    // Optional: Save the selected value (e.g., via an API call)
    //saveDropdownValue(reqNo, value);
  };
  // const saveDropdownValue = (reqNo, value) => {
  //   console.log(`Saving: ReqNo: ${reqNo}, Value: ${value}`);
  //   // Implement API call or logic to save the value here
  // };
  const handleCloseDropdownBox = () => {
    setShowDropdownBox(false);
  };
  const movetopage = () => {

  };
  const enterquotationtype = async (initiatorId, reqNo, quotationType) => {
    try {
      if (!quotationType) {
        alert("Please select a valid Quotation Type.");
        return;
      }
  
      const payload = {
        Initiator_ID: initiatorId,
        QuotationType: quotationType,
        Status: "Ask For Quotation", // Set the new status
      };
  
      const response = await axios.put(
        `https://localhost:7280/api/Requisitionentry/${initiatorId}`,
        payload
      );
  
      if (response.status === 200) {
        alert("Quotation Type updated and status changed to 'Ask For Quotation'!");
  
        // Update local state for the specific requisition
        setRequisitions((prevRequisitions) =>
          prevRequisitions.map((req) =>
            req.Initiator_ID === initiatorId
              ? { ...req, QuotationType: quotationType, Status: "Ask For Quotation" }
              : req
          )
        );
      } else {
        alert("Failed to update. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while updating.");
    }
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
  return (
    <>
     < div   className="main-content">
        <div className="page-content">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card rounded-0 bg-soft-success mx-n4 mt-n4 border-top">
                            <div className="px-4">
                                <div className="row">
                                    <div className="col-xxl-7 align-self-center">
                                        <div className="py-4">
                                            <h3 className="display-6 coming-soon-text">Purchase Suggestion</h3>                                   
                                        </div>
                                    </div>
                                    <div className="col-xxl-3 ms-auto">
                                        <div className="mb-n5 pb-1 faq-img d-none d-xxl-block">
                                            <img src="assets/images/faq-img.png" alt="" className="img-fluid"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
                  <th scope="col">Department</th>
                  <th scope="col">Item Name</th>
                  <th scope="col">Item Type</th>
                  <th scope="col">Supplier Name</th>
                  <th scope="col">Item Qty</th>
                  <th scope="col">UOM</th>
                  <th scope="col">Quotation Type</th>
                  <th scope="col">Void</th>
                  <th scope="col">Attachment</th>
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
                  requisitions.filter((req) => req.Status === "Req Received")
                  .map((req, index) => {
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
                      <td>
                        <span
                          style={{
                            color: req.Status === 'Req Received' ? '#1D3557' : 'black',
                          }}
                        >
                          {req.Status || req.status}
                        </span>
                      </td>
                      <td>{reqNo}</td>
                      <td>{req.Due_Date}</td>
                      <td>{req.Initiator_Name}</td>
                      <td>{req.Department}</td>
                      <td>{req.Item_Name}</td>
                      <td>{req.Item_Type}</td>
                      <td>{req.Suggested_supplier}</td>
                      <td>{req.qty}</td>
                      <td>{req.UOM}</td>
                      <td>
                        <select
                          value={req.QuotationType || ""} // Set the current value of the dropdown
                          onChange={(e) =>
                            enterquotationtype(req.Initiator_ID, reqNo, e.target.value)
                          }
                        >
                          <option value="">-- Select Quotation Type--</option>
                          <option value="By Mail">By Mail</option>
                          <option value="Telephonic">Telephonic</option>
                        </select>
                      </td>
                      <td>
                        <input type="checkbox" />
                      </td>
                      <td>
                        {req.Attchment ? req.Attchment.split('/').pop() : 'No Attachment'}
                      </td>
                      <td>
                        <button variant="primary" onClick={movetopage}>
                            Details
                        </button>
                        {/* <Button variant="primary" size="sm">Details</Button> */}
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
        <footer   className="footer">
            <div   className="container-fluid">
                <div   className="row">
                    <div   className="col-sm-6">
                        <script>document.write(new Date().getFullYear())</script> © Velzon.
                    </div>
                    <div   className="col-sm-6">
                        <div   className="text-sm-end d-none d-sm-block">
                            @Jigar Vyas
                        </div>
                    </div>
                </div>
            </div>
        </footer>
      </div>
    </>
  )
}

export default NewPurchaseSuggestion
