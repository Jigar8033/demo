import React from 'react'

const iis_server_upload = () => {
  return (
    <>
          <div  className="main-content">

<div  className="page-content">
    <div  className="container-fluid">

        {/* <!-- start page title --> */}
        <div  className="row">
            <div  className="col-12">
                <div  className="page-title-box d-sm-flex align-items-center justify-content-between">
                    <h4  className="mb-sm-0">Database Migration</h4>
                </div>
            </div>
        </div>
        <div  className="card">
            <div  className="card-body">
                <div  className="row g-4">
                    <div  className="col-lg-4">
                        <div  className="sticky-side-div">
                            <div  className="card ribbon-box border shadow-none right">
                                <img src="Images/data_migration.png" alt=""  className="img-fluid rounded"/>
                            </div>
                        </div>
                    </div>
                    <div  className="col-lg-8">
                        <div>
                            <div  className="dropdown float-end">
                                <button  className="btn btn-ghost-primary btn-icon dropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i  className="ri-more-fill align-middle fs-16"></i>
                                </button>
                                <ul  className="dropdown-menu dropdown-menu-end">
                                    <li><a  className="dropdown-item view-item-btn" href="javascript:void(0);"><i  className="ri-eye-fill align-bottom me-2 text-muted"></i>View</a></li>
                                    <li><a  className="dropdown-item edit-item-btn" href="#showModal" data-bs-toggle="modal"><i  className="ri-pencil-fill align-bottom me-2 text-muted"></i>Edit</a></li>
                                    <li><a  className="dropdown-item remove-item-btn" data-bs-toggle="modal" href="#deleteRecordModal"><i  className="ri-delete-bin-fill align-bottom me-2 text-muted"></i>Delete</a></li>
                                </ul>
                            </div>

                            <h4>Azure Cloud Invoice Generation </h4>
                            <div  className="hstack gap-3 flex-wrap">
                                <div  className="text-muted">Server : <a href="https://azure.microsoft.com/en-in/get-started/azure-portal"  className="text-primary fw-medium">Azure Cloud server</a></div>
                                <div  className="vr"></div>
                                <div  className="text-muted">Services : <span  className="text-body fw-medium">Cost Management + Billing</span></div>
                                <div  className="vr"></div>
                                <div  className="text-muted">Pages : <span  className="text-body fw-medium">View Invoices</span></div>
                            </div>

                            <div  className="row mt-4">
                                <div  className="col-lg-3 col-sm-6">
                                    <div  className="p-2 border border-dashed rounded text-center">
                                        <div>
                                            <p  className="text-muted fw-medium mb-1">Total Payment :</p>
                                            <h5  className="fs-17 text-success mb-0"><i  className="mdi mdi-ethereum me-1"></i>3,86,688</h5>
                                        </div>
                                    </div>
                                </div>
                                <div  className="col-lg-3 col-sm-6">
                                    <div  className="p-2 border border-dashed rounded text-center">
                                        <div>
                                            <p  className="text-muted fw-medium mb-1">Total Invoice</p>
                                            <h5  className="fs-17 mb-0">13</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div  className="mt-4 text-muted">
                                <h5  className="fs-14">Description :</h5>
                                <p>
                                    Log in to the Azure Portal (portal.azure.com).
In the left-hand menu, scroll down or search for "Cost Management + Billing" or simply "Cost Management" under the list of services. Click on it to open the Cost Management dashboard.
                                </p>
                            </div>
                            <div  className="product-content mt-5">
                                <h5  className="fs-14 mb-3">Invoice Details :</h5>
                                <nav>
                                    <ul  className="nav nav-tabs nav-tabs-custom nav-success" id="nav-tab" role="tablist">
                                        <li  className="nav-item">
                                            <a  className="nav-link active" id="nav-speci-tab" data-bs-toggle="tab" href="#nav-speci" role="tab" aria-controls="nav-speci" aria-selected="true">Invoices</a>
                                        </li>
                                    </ul>
                                </nav>
                                <div  className="tab-content border border-top-0 p-4" id="nav-tabContent">
                                    <div  className="tab-pane fade show active" id="nav-speci" role="tabpanel" aria-labelledby="nav-speci-tab">
                                        <div  className="table-responsive">
                                            <table  className="table align-middle table-nowrap mb-0">
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">
                                                            <div  className="d-flex align-items-center">
                                                                <img src="https://img.themesbrand.com/velzon/images/img-4.gif" alt=""  className="avatar-xs rounded object-cover" />
                                                                <a href="apps-nft-item-details.html"  className="link-dark"><span  className="mb-0 ms-2">January 2023</span></a>
                                                            </div>
                                                        </th>
                                                        <td>35,114</td>
                                                        <td>
                                                            <div  className="d-flex align-items-center">
                                                                <img src="https://img.themesbrand.com/velzon/images/img-4.gif" alt=""  className="avatar-xs rounded object-cover" />
                                                                <div  className="ms-2">
                                                                    <a href="#!">
                                                                        <h6  className="mb-1">February 2023</h6>
                                                                    </a>

                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>72064</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            <div  className="d-flex align-items-center">
                                                                <img src="https://img.themesbrand.com/velzon/images/img-4.gif" alt=""  className="avatar-xs rounded object-cover" />
                                                                <a href="apps-nft-item-details.html"  className="link-dark"><span  className="mb-0 ms-2">March 2023</span></a>
                                                            </div>
                                                        </th>
                                                        <td>78,545</td>
                                                        <td>
                                                            <div  className="d-flex align-items-center">
                                                               <img src="https://img.themesbrand.com/velzon/images/img-4.gif" alt=""  className="avatar-xs rounded object-cover" />
                                                                <div  className="ms-2">
                                                                    <a href="#!">
                                                                        <h6  className="mb-1">April 2023</h6>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>73,594</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            <div  className="d-flex align-items-center">
                                                                <img src="https://img.themesbrand.com/velzon/images/img-4.gif" alt=""  className="avatar-xs rounded object-cover" />
                                                                <a href="apps-nft-item-details.html"  className="link-dark"><span  className="mb-0 ms-2">May 2023</span></a>
                                                            </div>
                                                        </th>
                                                        <td>17,228</td>
                                                        <td>
                                                            <div  className="d-flex align-items-center">
                                                                <img src="https://img.themesbrand.com/velzon/images/img-4.gif" alt=""  className="avatar-xs rounded object-cover" />
                                                                <div  className="ms-2">
                                                                    <a href="#!">
                                                                        <h6  className="mb-1">June 2023</h6>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>10,566</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            <div  className="d-flex align-items-center">
                                                                <img src="https://img.themesbrand.com/velzon/images/img-4.gif" alt=""  className="avatar-xs rounded object-cover" />
                                                                <a href="apps-nft-item-details.html"  className="link-dark"><span  className="mb-0 ms-2">July 2023</span></a>
                                                            </div>
                                                        </th>
                                                        <td>10,971</td>
                                                        <td>
                                                            <div  className="d-flex align-items-center">
                                                                  <img src="https://img.themesbrand.com/velzon/images/img-4.gif" alt=""  className="avatar-xs rounded object-cover" />
                                                                <div  className="ms-2">
                                                                    <a href="#!">
                                                                        <h6  className="mb-1">August 2023</h6>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>10,568</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            <div  className="d-flex align-items-center">
                                                                <img src="https://img.themesbrand.com/velzon/images/img-4.gif" alt=""  className="avatar-xs rounded object-cover" />
                                                                <a href="apps-nft-item-details.html"  className="link-dark"><span  className="mb-0 ms-2">September 2023</span></a>
                                                            </div>
                                                        </th>
                                                        <td>10,919</td>
                                                        <td>
                                                            <div  className="d-flex align-items-center">
                                                                 <img src="https://img.themesbrand.com/velzon/images/img-4.gif" alt=""  className="avatar-xs rounded object-cover" />
                                                                <div  className="ms-2">
                                                                    <a href="#!">
                                                                        <h6  className="mb-1">October 2023</h6>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>10878.21</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            <div  className="d-flex align-items-center">
                                                                <img src="https://img.themesbrand.com/velzon/images/img-4.gif" alt=""  className="avatar-xs rounded object-cover" />
                                                                <a href="apps-nft-item-details.html"  className="link-dark"><span  className="mb-0 ms-2">November 2023</span></a>
                                                            </div>
                                                        </th>
                                                        <td>12,838</td>
                                                        <td>
                                                            <div  className="d-flex align-items-center">
                                                                  <img src="https://img.themesbrand.com/velzon/images/img-4.gif" alt=""  className="avatar-xs rounded object-cover" />
                                                                <div  className="ms-2">
                                                                    <a href="#!">
                                                                        <h6  className="mb-1">December 2023</h6>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>---</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                 
                                </div>
                            </div>
                        </div>
                    </div>
                
                </div>
           
            </div>
        </div>
 

    </div>
 
</div>
 

</div>
    </>
  )
}

export default iis_server_upload
