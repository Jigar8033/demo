import React  from 'react'
import Invoice from './Invoice'

const Third_party_developer_cost = () => {
    return (
        <div>
            <div className="main-content">

                <div className="page-content">
                    <div className="container-fluid">

                        {/* <!-- start page title --> */}
                        <div className="row">
                            <div className="col-12">
                                <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                                    <h4 className="mb-sm-0">Database Migration</h4>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <div className="row g-4">
                                    <div className="col-lg-4">
                                        <div className="sticky-side-div">
                                            <div className="card ribbon-box border shadow-none right">
                                                <img src="Images/invoice.png" alt="" className="img-fluid rounded" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-8">
                                        <div>
                                            <div className="dropdown float-end">
                                                <button className="btn btn-ghost-primary btn-icon dropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i className="ri-more-fill align-middle fs-16"></i>
                                                </button>
                                                <ul className="dropdown-menu dropdown-menu-end">
                                                    <li><a className="dropdown-item view-item-btn" href="#Dummy"><i className="ri-eye-fill align-bottom me-2 text-muted"></i>View</a></li>
                                                    <li><a className="dropdown-item edit-item-btn" href="#showModal" data-bs-toggle="modal"><i className="ri-pencil-fill align-bottom me-2 text-muted"></i>Edit</a></li>
                                                    <li><a className="dropdown-item remove-item-btn" data-bs-toggle="modal" href="#deleteRecordModal"><i className="ri-delete-bin-fill align-bottom me-2 text-muted"></i>Delete</a></li>
                                                </ul>
                                            </div>

                                            <h4>Azure Cloud Invoice Generation </h4>
                                            <div className="hstack gap-3 flex-wrap">
                                                <div className="text-muted">Server : <a href="https://azure.microsoft.com/en-in/get-started/azure-portal" className="text-primary fw-medium">Azure Cloud server</a></div>
                                                <div className="vr"></div>
                                                <div className="text-muted">Services : <span className="text-body fw-medium">Cost Management + Billing</span></div>
                                                <div className="vr"></div>
                                                <div className="text-muted">Pages : <span className="text-body fw-medium">View Invoices</span></div>
                                            </div>

                                            <div className="row mt-4">
                                                <div className="col-lg-3 col-sm-6">
                                                    <div className="p-2 border border-dashed rounded text-center">
                                                        <div>
                                                            <p className="text-muted fw-medium mb-1">Total Payment :</p>
                                                            <h5 className="fs-17 text-success mb-0"><i className="mdi mdi-ethereum me-1"></i>3,86,688</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-sm-6">
                                                    <div className="p-2 border border-dashed rounded text-center">
                                                        <div>
                                                            <p className="text-muted fw-medium mb-1">Total Invoice</p>
                                                            <h5 className="fs-17 mb-0">13</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-4 text-muted">
                                                <h5 className="fs-14">Description :</h5>
                                                <p>
                                                    Log in to the Azure Portal (portal.azure.com).
                                                    In the left-hand menu, scroll down or search for "Cost Management + Billing" or simply "Cost Management" under the list of services. Click on it to open the Cost Management dashboard.
                                                </p>
                                            </div>
                                            <div className="product-content mt-5">
                                                <h5 className="fs-14 mb-3">Invoice Details :</h5>


                                                {/* Custom Nav Tabe For Invoices start */}

                                                <Invoice/>


                                                {/* Custom Nav Tabe For Invoices start */}

                                                 
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!--end col--> */}
                                </div>
                                {/* <!--end row--> */}
                            </div>
                        </div>
                        {/* <!--end card--> */}

                    </div>
                    {/* <!-- container-fluid --> */}
                </div>
                {/* <!-- End Page-content --> */}

            </div>
        </div>
    )
}

export default Third_party_developer_cost
