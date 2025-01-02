import React   from 'react';
import Counter from './counter'

const Home = () => {
   
    return (
    <>
            <div className="main-content">

                <div className="page-content">
                    <div className="container-fluid">


                        <div className="row">
                            <div className="col-12">
                                <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                                    <h4 className="mb-sm-0">Analytics</h4>

                                    <div className="page-title-right">
                                        <ol className="breadcrumb m-0">
                                            <li className="breadcrumb-item"><a href='#'>Dashboards</a></li>
                                            <li className="breadcrumb-item active">Analytics</li>
                                        </ol>
                                    </div>

                                </div>
                            </div>
                        </div>


                        <div className="row">
                            <div className="col-xxl-5">
                                <div className="d-flex flex-column h-100">

                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="card card-animate">
                                                <div className="card-body">
                                                    <div className="d-flex justify-content-between">
                                                        <div>
                                                            <p className="fw-medium text-muted mb-0">Total Application</p>
                                                            <h2 className="mt-4 ff-secondary fw-semibold"><Counter target={35} /></h2>

                                                        </div>
                                                        <div>
                                                            <div className="avatar-sm flex-shrink-0">
                                                                <span className="avatar-title bg-soft-info rounded-circle fs-2">
                                                                    <i   className=" fa fa-users text-info " aria-hidden="true"></i>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>


                                        <div className="col-md-4">
                                            <div className="card card-animate">
                                                <div className="card-body">
                                                    <div className="d-flex justify-content-between">
                                                        <div>
                                                            <p className="fw-medium text-muted mb-0">Git Upload Projects</p>
                                                            <h2 className="mt-4 ff-secondary fw-semibold"><Counter target={20} />+</h2>

                                                        </div>

                                                    </div>
                                                </div>

                                            </div>

                                        </div>

                                        <div className="col-md-4">
                                            <div className="card card-animate">
                                                <div className="card-body">
                                                    <div className="d-flex justify-content-between">
                                                        <div>
                                                            <p className="fw-medium text-muted mb-0">Daily Task</p>
                                                            <h2 className="mt-4 ff-secondary fw-semibold"><Counter target={25} /> +

                                                            </h2>

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

            export default Home
