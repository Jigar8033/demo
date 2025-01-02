import React from 'react'

const Attendance = () => {
  return (
    <>
          <div className="main-content">
        <div className="page-content">
            <div className="container-fluid">
                <div className="profile-foreground position-relative mx-n4 mt-n4">
                    <div className="profile-wid-bg">
                        <img src="assets/images/profile-bg.jpg" alt="" className="profile-wid-img" />
                    </div>
                </div>
                <div className="pt-4 mb-4 mb-lg-3 pb-lg-4 profile-wrapper">
                    <div className="row g-4">

                        <div className="col">
                            <div className="p-2">
                                <h3 className="text-white mb-1">Attendance Process Overview
                                </h3>
                            </div>
                        </div>
                        <div className="col-12 col-lg-auto order-last order-lg-0">
                            <div className="row text text-white-50 text-center">
                                <div className="col-lg-6 col-4">
                                    <div className="p-2">
                                        <h4 className="text-white mb-1">24.3K</h4>
                                        <p className="fs-14 mb-0">Followers</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-4">
                                    <div className="p-2">
                                        <h4 className="text-white mb-1">1.3K</h4>
                                        <p className="fs-14 mb-0">Following</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div>
                            <div className="d-flex profile-wrapper">
                                <ul className="nav nav-pills animation-nav profile-nav gap-2 gap-lg-3 flex-grow-1" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link fs-14 active" data-bs-toggle="tab" href="#overview-tab" role="tab">
                                            <i className="ri-airplay-fill d-inline-block d-md-none"></i><span className="d-none d-md-inline-block">Overview</span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link fs-14" data-bs-toggle="tab" href="#activities" role="tab">
                                            <i className="ri-list-unordered d-inline-block d-md-none"></i><span className="d-none d-md-inline-block">HRMS Process</span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link fs-14" data-bs-toggle="tab" href="#projects" role="tab">
                                            <i className="ri-price-tag-line d-inline-block d-md-none"></i><span className="d-none d-md-inline-block">iVMS Software </span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link fs-14" data-bs-toggle="tab" href="#documents" role="tab">
                                            <i className="ri-folder-4-line d-inline-block d-md-none"></i><span className="d-none d-md-inline-block">ASAI Process</span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link fs-14" data-bs-toggle="tab" href="#screenstuck" role="tab">
                                            <i className="ri-folder-4-line d-inline-block d-md-none"></i><span className="d-none d-md-inline-block">Screen Stuck</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="tab-content pt-4 text-muted">
                                <div className="tab-pane active" id="overview-tab" role="tabpanel">
                                    <div className="row">
                                        <div className="col-xxl-12">
                                            <div className="card">
                                                <div className="card-body">
                                                    <h5 className="card-title mb-3">About</h5>
                                                    <p>
                                                        The attendance process typically involves various steps and methods to track and record the presence or absence of individuals in a particular setting, such as a workplace. An organization or institution sets up guidelines defining how attendance will be tracked. This may include rules on tardiness, leave approvals, work-from-home policies, etc . 
                                                        Manual Methods: Pen-and-paper sign-in sheets, where individuals physically mark their presence by signing or initialing their name.
                                                        Electronic Systems: Time clock systems, swipe cards, biometric scanners, QR codes, or RFID tags are used to log in and out.
                                                        Online Platforms: Digital attendance systems, where individuals log in through web portals or apps to mark their presence.
                                                    </p>
                                                    <div className="row">
                                                        <div className="col-6 col-md-4">
                                                            <div className="d-flex mt-4">
                                                                <div className="flex-shrink-0 avatar-xs align-self-center me-3">
                                                                    <div className="avatar-title bg-light rounded-circle fs-16 text-primary">
                                                                        <i className="ri-user-2-fill"></i>
                                                                    </div>
                                                                </div>
                                                                <div className="flex-grow-1 overflow-hidden">

                                                                    <h6 className="text-truncate mb-0">Establishment of Attendance Policy</h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-6 col-md-4">
                                                            <div className="d-flex mt-4">
                                                                <div className="flex-shrink-0 avatar-xs align-self-center me-3">
                                                                    <div className="avatar-title bg-light rounded-circle fs-16 text-primary">
                                                                        <i className="ri-user-2-fill"></i>
                                                                    </div>
                                                                </div>
                                                                <div className="flex-grow-1 overflow-hidden">

                                                                    <h6 className="text-truncate mb-0">Recording Attendance</h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-6 col-md-4">
                                                            <div className="d-flex mt-4">
                                                                <div className="flex-shrink-0 avatar-xs align-self-center me-3">
                                                                    <div className="avatar-title bg-light rounded-circle fs-16 text-primary">
                                                                        <i className="ri-user-2-fill"></i>
                                                                    </div>
                                                                </div>
                                                                <div className="flex-grow-1 overflow-hidden">

                                                                    <h6 className="text-truncate mb-0">Monitoring and Tracking</h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-6 col-md-4">
                                                            <div className="d-flex mt-4">
                                                                <div className="flex-shrink-0 avatar-xs align-self-center me-3">
                                                                    <div className="avatar-title bg-light rounded-circle fs-16 text-primary">
                                                                        <i className="ri-user-2-fill"></i>
                                                                    </div>
                                                                </div>
                                                                <div className="flex-grow-1 overflow-hidden">

                                                                    <h6 className="text-truncate mb-0">Management of Attendance Records</h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-6 col-md-4">
                                                            <div className="d-flex mt-4">
                                                                <div className="flex-shrink-0 avatar-xs align-self-center me-3">
                                                                    <div className="avatar-title bg-light rounded-circle fs-16 text-primary">
                                                                        <i className="ri-user-2-fill"></i>
                                                                    </div>
                                                                </div>
                                                                <div className="flex-grow-1 overflow-hidden">

                                                                    <h6 className="text-truncate mb-0">Generating Reports</h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-6 col-md-4">
                                                            <div className="d-flex mt-4">
                                                                <div className="flex-shrink-0 avatar-xs align-self-center me-3">
                                                                    <div className="avatar-title bg-light rounded-circle fs-16 text-primary">
                                                                        <i className="ri-user-2-fill"></i>
                                                                    </div>
                                                                </div>
                                                                <div className="flex-grow-1 overflow-hidden">

                                                                    <h6 className="text-truncate mb-0">Continuous Improvement</h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="activities" role="tabpanel">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title mb-3">HRMS Process</h5>
                                            <p>
                                                HRMS is module that can contains all details of employees like 
                                                General Details :-  ID, Organization , Joining Date , Birthdate , Gender , Address , Reporting Under .
                                                Official Details :- Which training given to him with start date & end date , Maximum hours taken in training , Training given by ,
                                                In which Location, How many employees attend this training etc.
                                            </p>
                                            <div className="acitivity-timeline">
                                                <div className="acitivity-item d-flex">
                                                    <div className="flex-shrink-0 avatar-xs acitivity-avatar">
                                                        <div className="avatar-title bg-soft-success text-success rounded-circle">
                                                            H
                                                        </div>
                                                    </div>
                                                    <div className="flex-grow-1 ms-3">
                                                        <h6 className="mb-1">Add employee entry into HRMS Web Application. </h6>
                                                    </div>
                                                </div>
                                                <div className="acitivity-item py-3 d-flex">
                                                    <br />
                                                    <div className="flex-grow-1 ms-3">
                                                        &nbsp;&nbsp;  
                                                        <img src="Images/hrms.png"  style={{height:"400px"}} />
                                                        <br />
                                                        <br />
                                                        <h6 className="mb-1">&nbsp;&nbsp;    &nbsp;&nbsp;   Added employee will show into the employee list </h6>
                                                    </div>
                                                </div>
                                                <br />
                                                <div className="acitivity-item d-flex">
                                                    <div className="flex-shrink-0 avatar-xs acitivity-avatar">
                                                        <div className="avatar-title bg-soft-success text-success rounded-circle">
                                                            H
                                                        </div>
                                                    </div>
                                                    <div className="flex-grow-1 ms-3">

                                                        <h6 className="mb-1">For generating I-card print , go to the attendance module and select the related navigation. </h6>
                                                    </div>
                                                </div>
                                                <div className="acitivity-item py-3 d-flex">
                                                    <br />
                                                    <div className="flex-grow-1 ms-3">
                                                        &nbsp;&nbsp;  
                                                        <img src="Images/icard.png"  style={{height:"400px"}} />
                                                        <br />
                                                        <br />
                                                        <h6 className="mb-1">&nbsp;&nbsp;    &nbsp;&nbsp; The list shows the employee who doesn’t have I-card, select the employees and click on generate Icard button.
                                                        </h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="projects" role="tabpanel">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title mb-3">iVMS Process</h5>
                                            <p>
                                                HRMS is module that can contains all details of employees like 
            General Details :-  ID, Organization , Joining Date , Birthdate , Gender , Address , Reporting Under .
            Official Details :- Which training given to him with start date & end date , Maximum hours taken in training , Training given by ,
            In which Location, How many employees attend this training etc.
                                            </p>
                                            <div className="acitivity-timeline">
                                                <div className="acitivity-item d-flex">
                                                    <div className="flex-shrink-0 avatar-xs acitivity-avatar">
                                                        <div className="avatar-title bg-soft-success text-success rounded-circle">
                                                            H
                                                        </div>
                                                    </div>
                                                    <div className="flex-grow-1 ms-3">
                                                        <h6 className="mb-1">Open Any Desk
                                                            <br />
                                                            <br />
                                                            ID:- 421194225
                                                            <br />
                                                            <br />
                                                            Password :- AhbArb#6008
                                                        </h6>
                                                    </div>
                                                </div>
                                                <div className="acitivity-item py-3 d-flex">
                                                    <br />
                                                    <div className="flex-grow-1 ms-3">
                                                        <h6 className="mb-1">After adding person details into HRMS, Have to add person details into the software 
                                                            <br />
                                                            <br />
                                                            And for Mi-fi card click on card option and when the card punch into device it generates the unique
                                                        </h6>
                                                        &nbsp;&nbsp;  
                    <img src="Images/adduser.png"  style={{height:"400px"}} />

                                                    </div>
                                                </div>
                                                <br />
                                                <div className="acitivity-item d-flex">
                                                    <div className="flex-shrink-0 avatar-xs acitivity-avatar">
                                                        <div className="avatar-title bg-soft-success text-success rounded-circle">
                                                            H
                                                        </div>
                                                    </div>
                                                    <div className="flex-grow-1 ms-3">
                                                        <h6 className="mb-1">The added person need to access into device location.
                                                            <br />
                                                            <br />
                                                            This will indicate the location in which employee will punches. And then send this data to device with Face + Card authentication
                                                        </h6>
                                                    </div>
                                                </div>
                                                <div className="acitivity-item py-3 d-flex">
                                                    <br />
                                                    <div className="flex-grow-1 ms-3">
                                                        &nbsp;&nbsp;  
                                                        <img src="Images/access_control.png"  style={{height:"400px"}} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--end tab-pane--> */}
                                <div className="tab-pane fade" id="documents" role="tabpanel">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title mb-3">Attendance Prcess</h5>
                                            <p>
                                                Attendance data is collected and stored systematically from the device to our SQL server. Then from our ASAI Web application we organize data and devide it into shifts and hour and calculate their timing and attendance.<br />
                                                The attendance process is regularly reviewed and refined to streamline operations, improve accuracy, and adapt to changing circumstances or technological advancements.
                                                <br />

                                                Upload shift Wise data and Get the report
                                            </p>
                                            <div className="acitivity-timeline">
                                                <div className="acitivity-item py-3 d-flex">
                                                    <br />
                                                    <div className="flex-grow-1 ms-3">
                                                        <h6 className="mb-1">Download formate and then upload it into the 
                                                            <br />
                                                        </h6>
                                                        &nbsp;&nbsp;  
                    <img src="Images/asai.png"  style={{height:"400px"}} />
                                                    </div>
                                                </div>
                                                <br />
                                                <div className="acitivity-item d-flex">
                                                    <div className="flex-shrink-0 avatar-xs acitivity-avatar">
                                                        <div className="avatar-title bg-soft-success text-success rounded-circle">
                                                            H
                                                        </div>
                                                    </div>
                                                    <div className="flex-grow-1 ms-3">
                                                        <h6 className="mb-1">
                                                            <a href="https://docs.google.com/document/d/1LORTRce9sicHWuXlr9yB9kj1_nZIq_N-2nyPao5imVw/edit" target="_blank">Daily Mail Formate
                                                            </a>
                                                            <br />
                                                            <br />
                                                        </h6>
                                                    </div>
                                                </div>
                                                <div className="acitivity-item py-3 d-flex">
                                                    <br />
                                                    <div className="flex-grow-1 ms-3">
                                                        &nbsp;&nbsp;  
                                                        <img src="Images/asai2.png"  style={{height:"400px"}} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="screenstuck" role="tabpanel">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title mb-3">Attendance Prcess</h5>
                                            <p>
                                                When the screen is stuck and data is not coming on time we need to go to iVMS Software and go to Time & Attendance --  Attendance Statistic --  Attendance Record
                            <br />
                                                Select Date and continue click on the Search button the software will retrive data from the device as many time you click on search button.
                                            </p>
                                            <div className="acitivity-timeline">
                                                <div className="acitivity-item py-3 d-flex">
                                                    <br />
                                                    <div className="flex-grow-1 ms-3">
                                                        <img src="Images/ivms_attendance.png"   style={{height:"400px"}} />
                                                    </div>
                                                </div>
                                                <br />
                                                <div className="acitivity-item d-flex">
                                                    <div className="flex-shrink-0 avatar-xs acitivity-avatar">
                                                        <div className="avatar-title bg-soft-success text-success rounded-circle">
                                                            H
                                                        </div>
                                                    </div>
                                                    <div className="flex-grow-1 ms-3">
                                                        <h6 className="mb-1">After that click on the export button and then open that file and right click on time cell and click format cells and then go to custom and type yyyy-MM-dd hh:mm:ss
                                                         <br />
                                                            This will arrange the date time for formate we require.
                                                          <br />
                                                        </h6>
                                                    </div>
                                                </div>
                                                <br />
                                                <br />
                                                <div className="acitivity-item d-flex">
                                                    <div className="flex-shrink-0 avatar-xs acitivity-avatar">
                                                        <div className="avatar-title bg-soft-success text-success rounded-circle">
                                                            H
                                                        </div>
                                                    </div>
                                                    <div className="flex-grow-1 ms-3">
                                                        <h6 className="mb-1">Now click this google sheet <a href="https://docs.google.com/spreadsheets/d/1GlhKCDSm7exB2tJU0AxJyVIFYj24IeJzGs2P6AULKvA/edit#gid=0">click here </a>, now from the exported excel copy paste the data as per our table columns and the paste this data into the VMSAttendance
                                                           <br />
                                                        </h6>
                                                    </div>
                                                </div>
                                                <div className="acitivity-item py-3 d-flex">
                                                    <br />
                                                    <div className="flex-grow-1 ms-3">
                                                        &nbsp;&nbsp;  
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
    </div>
    </>
  )
}

export default Attendance
