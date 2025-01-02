// import { hover } from '@testing-library/user-event/dist/hover';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import 'bootstrap/dist/css/bootstrap.min.css';
import './nav.css'


const Sidebar = () => {
  const [activeItem, setActiveItem] = useState('');
  const handleItemClick = (item) => {
    setActiveItem(item);
  };
    // const [isOpen1, setIsOpen1] = useState(false);
    // const [isOpen2, setIsOpen2] = useState(false);
    // const [isOpen3, setIsOpen3] = useState(false);
    // const [isOpen4, setIsOpen4] = useState(false);
    // const [isOpen5, setIsOpen5] = useState(false);
    // const [isOpen6, setIsOpen6] = useState(false);
  

    // const toggleCollapse1 = () => {
    //     setIsOpen1(!isOpen1);
    // };
    // const toggleCollapse2 = () => {
    //     setIsOpen2(!isOpen2);
    // };
    // const toggleCollapse3 = () => {
    //     setIsOpen3(!isOpen3);
    // };
    // const toggleCollapse4 = () => {
    //     setIsOpen4(!isOpen4);
    // };
    // const toggleCollapse5 = () => {
    //     setIsOpen5(!isOpen5);
    // };
    // const toggleCollapse6 = () => {
    //     setIsOpen6(!isOpen6);
    // };
    
    const [collapsed, setCollapsed] = useState({
        sidebarApps: false,
        sidebarLayouts: false,
        sidebarPages: false,
        sidebarLanding: false,
        sidebarUI: false,
        sidebarAdvanceUI: false,
      });
    
      const toggleCollapse = (key) => {
        setCollapsed((prevState) => ({
          ...Object.keys(prevState).reduce((acc, k) => {
            acc[k] = k === key ? !prevState[key] : false;
            return acc;
          }, {}),
        }));
      };
    
    return (
        <>
           
            
    <div className="app-menu navbar-menu" style={{ backgroundColor: " #1E2761" }}>
      <div className="navbar-brand-box">
        <Link to="/" className="logo logo-dark">
          <span className="logo-sm">
            <img src="assets/images/logo-sm.png" alt="" height="22" />
          </span>
          <span className="logo-lg">
            <label style={{ color: "White", fontSize: "14px" }}>
              <img src="images/sswnew.png" style={{ height: "40px" }} alt='Invalid' />&nbsp;&nbsp; S.S. White Technology
            </label>
          </span>
        </Link>
        <a href="index.html" className="logo logo-light">
          <span className="logo-sm">
            <img src="assets/images/logo-sm.png" alt="" height="22" />
          </span>
          <span className="logo-lg">
            <label style={{ color: "White", fontSize: "14px" }}>
              <img src="images/sswnew.png" style={{ height: "40px" }}  alt='Invalid'/>&nbsp;&nbsp; S.S. White Technology
            </label>
          </span>
        </a>
        <button type="button" className="btn btn-sm p-0 fs-20 header-item float-end btn-vertical-sm-hover" id="vertical-hover">
          <i className="ri-record-circle-line"></i>
        </button>
      </div>
      <div id="scrollbar">
        <div className="container-fluid">
          <div id="two-column-menu"></div>
          <ul className="navbar-nav" id="navbar-nav">
            <li className="menu-title"><span>Menu</span></li>
            <li className={`nav-item ${activeItem === 'Dashboard' ? 'active' : ''}`} onClick={() => handleItemClick('Dashboard')}>
              <Link className="nav-link menu-link"  onClick={() => toggleCollapse('dashboard')}  to="/">
                <i className="ri-honour-line"></i>
                <span>Dashboard</span>
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link menu-link" data-bs-toggle="collapse" onClick={() => toggleCollapse('sidebarApps')} aria-expanded={collapsed.sidebarApps}>
                <i className="ri-apps-2-line"></i><span>PRS</span>
              </Link>
              <div className={`collapse menu-dropdown ${collapsed.sidebarApps ? 'show' : ''}`} id="sidebarApps">
                <ul className="nav nav-sm flex-column">
                  <li className={`nav-item ${activeItem === 'Troubleshooting' ? 'active' : ''}`} onClick={() => handleItemClick('Troubleshooting')}>
                    
                    <Link to="/Troubleshooting" className="nav-link">Requisition Entry</Link>
                  </li >
                  <li className={`nav-item ${activeItem === 'filter' ? 'active' : ''}`} onClick={() => handleItemClick('filter')}>
                    <Link to="/MVC_Structure" className="nav-link">Filter</Link>
                  </li>
                  <li className={`nav-item ${activeItem === 'Purposeofpurchase' ? 'active' : ''}`} onClick={() => handleItemClick('Purposeofpurchase')}>
                    <Link to="/beginnersCSharp" className="nav-link">Purpose of Purchase</Link>
                  </li>
                  <li className={`nav-item ${activeItem === 'NewPurchaseSuggestion' ? 'active' : ''}`} onClick={() => handleItemClick('NewPurchaseSuggestion')}>
                    <Link to="/DatabaseStructure"     className="nav-link">New Purchase Suggestion</Link>
                  </li>
                  <li className={`nav-item ${activeItem === 'EPOEntry' ? 'active' : ''}`} onClick={() => handleItemClick('EPO Entry')}>
                    <Link to="/Usage_of_database"     className="nav-link">EPO Entry</Link>
                  </li>
                </ul>
              </div>
            </li>

            <li className="nav-item">
              <Link className="nav-link menu-link" data-bs-toggle="collapse"  role='button' onClick={() => toggleCollapse('sidebarLayouts')} aria-expanded={collapsed.sidebarLayouts}>
                <i className="ri-layout-3-line"></i><span>MRS</span>
              </Link>
              <div className={`collapse menu-dropdown ${collapsed.sidebarLayouts ? 'show' : ''}`} id="sidebarLayouts">
                <ul className="nav nav-sm flex-column">
                  <li className={`nav-item ${activeItem === 'DatabaseStructure' ? 'active' : ''}`} onClick={() => handleItemClick('DatabaseStructure')}>
                    <Link to="/DatabaseStructure"     className="nav-link">Database Structure</Link>
                  </li>
                  <li className={`nav-item ${activeItem === 'Usage_of_database' ? 'active' : ''}`} onClick={() => handleItemClick('Usage_of_database')}>
                    <Link to="/Usage_of_database" className="nav-link">Database Creation</Link>
                  </li>
                  <li className={`nav-item ${activeItem === 'UsageOfDatabase' ? 'active' : 'drtg'}`} onClick={() => handleItemClick('UsageOfDatabase')}>
                    <Link to="/UsageOfDatabase" className="nav-link">Usage of Database</Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
        </>
    )
}

export default Sidebar
